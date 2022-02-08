require_relative "./helper"

class TestPages < Minitest::Test
  context "homepage" do
    setup do
      document_root find_resource_by_url("/")
    end
    should "exist" do
      assert_select "p", { text: /Euruko 2022/, minimum: 1 }
    end
  end

  context "cfp" do
    setup do
      document_root find_resource_by_url("/cfp/")
    end
    should "exist" do
      assert_select "h1", { text: /CFP/, minimum: 1 }
    end
  end

  context "code of conduct" do
    setup do
      document_root find_resource_by_url("/code/")
    end
    should "exist" do
      assert_select "h1", { text: /Code of Conduct/, minimum: 1 }
    end
  end

  context "tickets" do
    setup do
      document_root find_resource_by_url("/tickets/")
    end
    should "exist" do
      assert_select "h1", { text: /Euruko 2022 tickets/, minimum: 1 }
    end
  end

  context "sponsoring" do
    setup do
      document_root find_resource_by_url("/sponsoring/")
    end
    should "exist" do
      assert_select "h1", { text: /Sponsorship packages/, minimum: 1 }
    end
  end

  context "sitemap" do
    setup do
      page = site.pages.find { |doc| doc.url == "/sitemap.xml" }
      document_root page
    end
    should "exist" do
      assert_select "loc", { minimum: 5 }
    end
  end

  def find_resource_by_url(url)
    page = site.resources.find { |doc| doc.relative_url == url }
    raise "No resource found for #{url}" unless page
    document_root page
  end
end
