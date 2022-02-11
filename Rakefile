require "rubygems"
require "bundler/setup"

require "tty-logger"

require File.expand_path("./lib/tito_countries", __dir__)

desc "Display help"
task :help do
  system("rake -sT")
end

namespace :tito do
  desc "Update the attendee country stats"
  task :country_stats, [:account_slug, :event_slug] do |_task, args|
    logger = TTY::Logger.new
    stats_path = File.expand_path("./frontend/data/stats.json", __dir__)
    token_regexp = /\A(secret_)([^_]+)_(.+)\z/i

    tito_countries = TitoCountries.new(
      api_token: ENV.fetch("TITO_API_TOKEN"),
      account_slug: args.fetch(:account_slug),
      event_slug: args.fetch(:event_slug)
    )

    logger.info("Fetching data from Tito", {
      api_token: tito_countries.api_token.gsub(token_regexp, '\1\2_...'),
      account: tito_countries.account_slug,
      event: tito_countries.event_slug
    })

    tito_countries.fetch_data

    logger.success("Received data", {
      orders: tito_countries.registrations_count,
      tickets: tito_countries.tickets_count
    })

    stats = tito_countries.stats

    logger.success("Processed stats", {
      countries: stats.length
    })

    logger.info("Writing to file", {
      path: stats_path
    })

    out = File.open(stats_path, "wb") do |file|
      file.write(JSON.pretty_generate(stats))
    end

    logger.success "Done", bytes: out
  end
end

task default: [:help]
