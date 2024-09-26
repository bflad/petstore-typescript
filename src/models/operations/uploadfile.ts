/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UploadFileRequest = {
  /**
   * ID of pet to update
   */
  petId: number;
  /**
   * Additional Metadata
   */
  additionalMetadata?: string | undefined;
  requestBody?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined;
};

/** @internal */
export const UploadFileRequest$inboundSchema: z.ZodType<
  UploadFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  petId: z.number().int(),
  additionalMetadata: z.string().optional(),
  RequestBody: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UploadFileRequest$Outbound = {
  petId: number;
  additionalMetadata?: string | undefined;
  RequestBody?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined;
};

/** @internal */
export const UploadFileRequest$outboundSchema: z.ZodType<
  UploadFileRequest$Outbound,
  z.ZodTypeDef,
  UploadFileRequest
> = z.object({
  petId: z.number().int(),
  additionalMetadata: z.string().optional(),
  requestBody: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadFileRequest$ {
  /** @deprecated use `UploadFileRequest$inboundSchema` instead. */
  export const inboundSchema = UploadFileRequest$inboundSchema;
  /** @deprecated use `UploadFileRequest$outboundSchema` instead. */
  export const outboundSchema = UploadFileRequest$outboundSchema;
  /** @deprecated use `UploadFileRequest$Outbound` instead. */
  export type Outbound = UploadFileRequest$Outbound;
}