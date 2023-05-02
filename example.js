x = {
  server: {
    url: "https://service-catalog.fly.dev",
    endpoint: "/api/result/47/",
  },
  check: {
    id: 1,
    name: "Nope",
    slug: "nope",
    description:
      "This is an example of health check that is going to fail for every service. The code in the repo: https://github.com/burnt-tomatoes/service-catalog-checks checks to see if the `slug` of the check is `nope`, if so it fails.",
    frequency: "daily",
    active: true,
    created: "2023-04-20T22:40:45.539919Z",
    updated: "2023-04-20T22:40:45.539933Z",
  },
  result: {
    id: 47,
    result: "unknown",
    message: "",
    status: "sent",
    created: "2023-04-28T22:21:25.486272Z",
    updated: "2023-04-28T22:21:25.486294Z",
    service: 4,
    health_check: 1,
  },
  service: {
    id: 4,
    name: "Databases",
    slug: "databases",
    description:
      "The small but mighty database administrators at Burnt Tomatoes.",
    path: "",
    type: "Logical",
    priority: 1,
    active: true,
    meta: {
      github_url: "https://github.com/service-catalog-testing/databases",
      datadog_url: "https://app.datadog.com/some-dashboard",
      slack_channel: "#database-team",
      pager_duty_url: "https://pagerduty.com/some-pager-duty",
    },
    created: "2023-03-31T19:53:30.295575Z",
    updated: "2023-04-28T22:21:22.160539Z",
    source: 3,
    dependencies: [],
  },
  source: {
    id: 3,
    url: "https://github.com/burnt-tomatoes/databases",
    slug: "burnt-tomatoes-databases",
    active: true,
    created: "2023-03-31T19:53:29.098778Z",
    updated: "2023-03-31T19:53:29.098790Z",
  },
};
console.log(JSON.stringify(x));
