require_relative "./helper"
class TestHomepage < Minitest::Test
  context "homepage" do
    setup do
      page = site.resources.find { |doc| doc.relative_url == "/" }
      document_root page
    end
    should "exist" do
      assert_select "p", { text: /Euruko 2022/, minimum: 1 }
    end
  end

  context "sitemap" do
    setup do
      page = site.pages.find { |doc| doc.url == "/sitemap.xml" }
      document_root page
    end
    should "exist" do
      assert_select "loc", { minimum: 1 }
    end
  end
end
