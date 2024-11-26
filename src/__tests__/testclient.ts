/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "../lib/http.js";

export function createTestHTTPClient(testName: string): HTTPClient {
  const httpClient = new HTTPClient({
    fetcher: (request: URL | RequestInfo) => {
      return fetch(request);
    },
  });

  httpClient.addHook("beforeRequest", (request: Request) => {
    const nextRequest = new Request(request, {
      signal: request.signal || AbortSignal.timeout(5000),
    });

    nextRequest.headers.set("x-speakeasy-test-name", testName);

    return nextRequest;
  });

  return httpClient;
}