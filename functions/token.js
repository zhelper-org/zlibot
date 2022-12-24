export async function onRequest(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
    const res = await fetch(`https://default31fced372f724722978f6a839722e7.fd.environment.api.powerplatform.com/powervirtualagents/bots/026386cb-d663-4619-8ce5-25bdfa4930c6/directline/token?api-version=2022-03-01-preview`);
    const token_data = await res.json();

    const info = JSON.stringify(token_data);
    return new Response(info);

  }