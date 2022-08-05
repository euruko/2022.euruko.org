class SiteBuilder < Bridgetown::Builder
  # write builders which subclass SiteBuilder in plugins/builders
end

Bridgetown::Resource::PermalinkProcessor.register_placeholder :group, ->(resource) do
  "#{resource.data.group}"
end

Bridgetown::Resource::PermalinkProcessor.register_placeholder :start_time, ->(resource) do
  "#{resource.data.start_time.strftime("%H%M")}"
end
