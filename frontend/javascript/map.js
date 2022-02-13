__webpack_public_path__ = "/_bridgetown/static/js/";

async function initializeMap(svgElement) {
  const d3 = await import("d3");

  const worldUrl = svgElement.dataset.world;
  const statsUrl = svgElement.dataset.stats;

  const svg = d3.select(svgElement),
    width = +svgElement.viewBox.baseVal.width,
    height = +svgElement.viewBox.baseVal.height;

  console.log({ svg, width, height, ...svgElement.dataset });

  // Map and projection
  const projection = d3
    .geoNaturalEarth1()
    .center([0, 0]) // GPS of location to zoom on
    .scale(100) // This is like the zoom
    .translate([width / 2, height / 2]);

  Promise.all([d3.json(worldUrl), d3.json(statsUrl)]).then(function (initialize) {
    let dataGeo = initialize[0];
    let data = initialize[1];

    // Create a color scale
    const valueExtent = d3.extent(data, (d) => +d.percentage);
    const color = d3
      .scaleSequential()
      .domain(valueExtent)
      .interpolator(d3.interpolateLab(d3.hsl(328, 0.3, 0.8), d3.hsl(328, 0.8, 0.55)));

    // Draw the map
    const backgroundColor = "#000024";
    const graticuleColor = "#d74090";
    const graticuleStroke = 0.4;
    const mapColor = "#f767b3";
    const graticule = d3.geoGraticule10();
    // .-. ..- -... -.--
    // R   U   B    Y
    const dashArray = "2 2 4 2 2 4 2 2 2 2 4 4 4 2 2 2 2 2 2 4 4 2 2 2 4 2 4 2";
    svg
      .append("path")
      .data([{ type: "Sphere" }])
      .join("path")
      .attr("fill", backgroundColor)
      .attr("d", d3.geoPath().projection(projection))
      .style("stroke", graticuleColor)
      .style("stroke-width", graticuleStroke * 2)
      .style("opacity", 1);
    svg
      .append("path")
      .data([graticule])
      .join("path")
      .attr("fill", "none")
      .attr("d", d3.geoPath().projection(projection))
      .style("stroke", graticuleColor)
      .style("stroke-width", graticuleStroke)
      .style("stroke-dasharray", dashArray)
      .style("opacity", 1);

    svg
      .append("g")
      .selectAll("path")
      .data(dataGeo.features)
      .enter()
      .append("path")
      .attr("d", d3.geoPath().projection(projection))
      .attr("fill", (d) => {
        const stats = data.find((c) => c.alpha3 == d.id);
        console.log({ stats, ...d });
        d.percentage = stats?.percentage || 0;
        return color(d.percentage);
      });
  });
}

window.addEventListener("load", () => {
  const mapElement = document.querySelector("[data-map]");
  if (mapElement) {
    initializeMap(mapElement);
  }
});
