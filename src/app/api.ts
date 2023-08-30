import type {Data, Node} from "./types";

const api = {
  event: {
    tuesday: () =>
      fetch("https://api.swapcard.com/graphql", {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.8",
          "content-type": "application/json",
          "sec-ch-ua": '"Chromium";v="116", "Not)A;Brand";v="24", "Brave";v="116"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-gpc": "1",
          "x-client-origin": "app.swapcard.com",
          "x-client-platform": "Event App",
          "x-client-version": "2.289.3",
          "x-content-language": "en_US",
        },
        referrer: "https://app.swapcard.com/",
        referrerPolicy: "strict-origin",
        body: '[{"operationName":"PlanningListViewConnectionQuery","variables":{"eventId":"RXZlbnRfMTQ3MjE2MA==","withEvent":true,"viewId":"RXZlbnRWaWV3XzYwMjEwNg==","timezone":"America/Buenos_Aires","aggregationsIds":["eyJkYXRhIjp7InJhbmdlIjpbMTY5NTY5NzIwMCwxNjk1NzgzNjAwXX19"],"after":null,"first":500},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"451a05a3182a71b2515b9a3a22ef77641537ed87e2c07fe8af33f862e5cb6aea"}}}]',
        method: "POST",
        mode: "cors",
        credentials: "omit",
      })
        .then((res) => res.json() as Promise<{data: Data}[]>)
        .then(([data]) => data.data.view.plannings.nodes),
    wednesday: () =>
      fetch("https://api.swapcard.com/graphql", {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.8",
          "content-type": "application/json",
          "sec-ch-ua": '"Chromium";v="116", "Not)A;Brand";v="24", "Brave";v="116"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-gpc": "1",
          "x-client-origin": "app.swapcard.com",
          "x-client-platform": "Event App",
          "x-client-version": "2.289.3",
          "x-content-language": "en_US",
        },
        referrer: "https://app.swapcard.com/",
        referrerPolicy: "strict-origin",
        body: '[{"operationName":"PlanningListViewConnectionQuery","variables":{"eventId":"RXZlbnRfMTQ3MjE2MA==","withEvent":true,"viewId":"RXZlbnRWaWV3XzYwMjEwNg==","timezone":"America/Buenos_Aires","aggregationsIds":["eyJkYXRhIjp7InJhbmdlIjpbMTY5NTc4MzYwMCwxNjk1ODcwMDAwXX19"],"after":null,"first":500},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"451a05a3182a71b2515b9a3a22ef77641537ed87e2c07fe8af33f862e5cb6aea"}}}]',
        method: "POST",
        mode: "cors",
        credentials: "omit",
      })
        .then((res) => res.json() as Promise<{data: Data}[]>)
        .then(([data]) => data.data.view.plannings.nodes),
    thursday: () =>
      fetch("https://api.swapcard.com/graphql", {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.8",
          "content-type": "application/json",
          "sec-ch-ua": '"Chromium";v="116", "Not)A;Brand";v="24", "Brave";v="116"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-gpc": "1",
          "x-client-origin": "app.swapcard.com",
          "x-client-platform": "Event App",
          "x-client-version": "2.289.3",
          "x-content-language": "en_US",
        },
        referrer: "https://app.swapcard.com/",
        referrerPolicy: "strict-origin",
        body: '[{"operationName":"PlanningListViewConnectionQuery","variables":{"eventId":"RXZlbnRfMTQ3MjE2MA==","withEvent":true,"viewId":"RXZlbnRWaWV3XzYwMjEwNg==","timezone":"America/Buenos_Aires","aggregationsIds":["eyJkYXRhIjp7InJhbmdlIjpbMTY5NTg3MDAwMCwxNjk1OTU2NDAwXX19"],"after":null,"first":500},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"451a05a3182a71b2515b9a3a22ef77641537ed87e2c07fe8af33f862e5cb6aea"}}}]',
        method: "POST",
        mode: "cors",
        credentials: "omit",
      })
        .then((res) => res.json() as Promise<{data: Data}[]>)
        .then(([data]) => data.data.view.plannings.nodes),
    friday: () =>
      fetch("https://api.swapcard.com/graphql", {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.8",
          "content-type": "application/json",
          "sec-ch-ua": '"Chromium";v="116", "Not)A;Brand";v="24", "Brave";v="116"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-gpc": "1",
          "x-client-origin": "app.swapcard.com",
          "x-client-platform": "Event App",
          "x-client-version": "2.289.3",
          "x-content-language": "en_US",
        },
        referrer: "https://app.swapcard.com/",
        referrerPolicy: "strict-origin",
        body: '[{"operationName":"PlanningListViewConnectionQuery","variables":{"eventId":"RXZlbnRfMTQ3MjE2MA==","withEvent":true,"viewId":"RXZlbnRWaWV3XzYwMjEwNg==","timezone":"America/Buenos_Aires","aggregationsIds":["eyJkYXRhIjp7InJhbmdlIjpbMTY5NTk1NjQwMCwxNjk2MDQyODAwXX19"],"after":null,"first":500},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"451a05a3182a71b2515b9a3a22ef77641537ed87e2c07fe8af33f862e5cb6aea"}}}]',
        method: "POST",
        mode: "cors",
        credentials: "omit",
      })
        .then((res) => res.json() as Promise<{data: Data}[]>)
        .then(([data]) => data.data.view.plannings.nodes),
    saturday: () =>
      fetch("https://api.swapcard.com/graphql", {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.8",
          "content-type": "application/json",
          "sec-ch-ua": '"Chromium";v="116", "Not)A;Brand";v="24", "Brave";v="116"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-gpc": "1",
          "x-client-origin": "app.swapcard.com",
          "x-client-platform": "Event App",
          "x-client-version": "2.289.3",
          "x-content-language": "en_US",
        },
        referrer: "https://app.swapcard.com/",
        referrerPolicy: "strict-origin",
        body: '[{"operationName":"PlanningListViewConnectionQuery","variables":{"eventId":"RXZlbnRfMTQ3MjE2MA==","withEvent":true,"viewId":"RXZlbnRWaWV3XzYwMjEwNg==","timezone":"America/Buenos_Aires","aggregationsIds":["eyJkYXRhIjp7InJhbmdlIjpbMTY5NjA0MjgwMCwxNjk2MTI5MjAwXX19"],"after":null,"first":500},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"451a05a3182a71b2515b9a3a22ef77641537ed87e2c07fe8af33f862e5cb6aea"}}}]',
        method: "POST",
        mode: "cors",
        credentials: "omit",
      })
        .then((res) => res.json() as Promise<{data: Data}[]>)
        .then(([data]) => data.data.view.plannings.nodes),
    list: async (): Promise<Node[]> => {
      return await Promise.all([
        api.event.tuesday(),
        api.event.wednesday(),
        api.event.thursday(),
        api.event.friday(),
        api.event.saturday(),
      ]).then((data) => data.flat());
    },
  },
};

export default api;
