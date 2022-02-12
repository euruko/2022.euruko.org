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
    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.subregion))
      .range(d3.schemePaired);

    // Add a scale for bubble size
    const valueExtent = d3.extent(data, (d) => +d.percentage);
    const size = d3
      .scaleSqrt()
      .domain(valueExtent) // What's in the data
      .range([2, 15]); // Size in pixel

    // Draw the map
    const backgroundColor = "#000024";
    const graticuleColor = "#d74090";
    const graticuleStroke = 0.4;
    const mapColor = "#f767b3";
    const graticule = d3.geoGraticule10();
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
      .style("opacity", 1);
    svg
      .append("g")
      .selectAll("path")
      .data(dataGeo.features)
      .join("path")
      .attr("fill", mapColor)
      .attr("d", d3.geoPath().projection(projection))
      .style("stroke", mapColor)
      .style("stroke-width", graticuleStroke)
      .style("opacity", 1);

    // Add circles:
    svg
      .selectAll("myCircles")
      .data(data.sort((a, b) => +b.percentage - +a.percentage).filter((d, i) => i < 1000))
      .join("circle")
      .attr("cx", (d) => projection([+d.longitude, +d.latitude])[0])
      .attr("cy", (d) => projection([+d.longitude, +d.latitude])[1])
      .attr("r", (d) => size(+d.percentage))
      .style("fill", (d) => color(d.subregion))
      .attr("stroke", "none")
      .attr("stroke-width", 1)
      .attr("fill-opacity", 0.8);

    // --------------- //
    // ADD LEGEND //
    // --------------- //

    // // Add legend: circles
    // const valuesToShow = [10, 20, 40];
    // const xCircle = valuesToShow[valuesToShow.length - 1];
    // const xLabel = 90;
    // svg
    //   .selectAll("legend")
    //   .data(valuesToShow)
    //   .join("circle")
    //   .attr("cx", xCircle)
    //   .attr("cy", (d) => height - size(d))
    //   .attr("r", (d) => size(d))
    //   .style("fill", "none")
    //   .attr("stroke", "white");

    // // Add legend: segments
    // svg
    //   .selectAll("legend")
    //   .data(valuesToShow)
    //   .join("line")
    //   .attr("x1", (d) => {
    //     console.log({ xCircle, d, "size(d)": size(d) });
    //     return xCircle;
    //   })
    //   .attr("x2", xLabel)
    //   .attr("y1", (d) => height - size(d) * 2)
    //   .attr("y2", (d) => height - size(d) * 2)
    //   .attr("stroke", "white")
    //   .style("stroke-dasharray", "2,2");

    // // Add legend: labels
    // svg
    //   .selectAll("legend")
    //   .data(valuesToShow)
    //   .join("text")
    //   .attr("x", xLabel + 2)
    //   .attr("y", (d) => height - size(d) * 2)
    //   .text((d) => `${d}%`)
    //   .style("font-size", 8)
    //   .style("fill", "white")
    //   .attr("alignment-baseline", "middle");
  });
}

window.addEventListener("load", () => {
  const mapElement = document.querySelector("[data-map]");
  if (mapElement) {
    initializeMap(mapElement);
  }
});
