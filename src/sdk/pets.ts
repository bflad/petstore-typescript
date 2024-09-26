/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { petsAdd } from "../funcs/petsAdd.js";
import { petsDelete } from "../funcs/petsDelete.js";
import { petsFindByStatus } from "../funcs/petsFindByStatus.js";
import { petsFindByTags } from "../funcs/petsFindByTags.js";
import { petsGet } from "../funcs/petsGet.js";
import { petsUpdate } from "../funcs/petsUpdate.js";
import { petsUploadImage } from "../funcs/petsUploadImage.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Pets extends ClientSDK {
  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  async update(
    request: components.Pet,
    options?: RequestOptions,
  ): Promise<components.Pet> {
    return unwrapAsync(petsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new pet to the store
   *
   * @remarks
   * Add a new pet to the store
   */
  async add(
    request: components.Pet,
    options?: RequestOptions,
  ): Promise<components.Pet> {
    return unwrapAsync(petsAdd(
      this,
      request,
      options,
    ));
  }

  /**
   * Finds Pets by status
   *
   * @remarks
   * Multiple status values can be provided with comma separated strings
   */
  async findByStatus(
    request: operations.FindPetsByStatusRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Pet>> {
    return unwrapAsync(petsFindByStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Finds Pets by tags
   *
   * @remarks
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  async findByTags(
    request: operations.FindPetsByTagsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Pet>> {
    return unwrapAsync(petsFindByTags(
      this,
      request,
      options,
    ));
  }

  /**
   * Find pet by ID
   *
   * @remarks
   * Returns a single pet
   */
  async get(
    request: operations.GetPetByIdRequest,
    options?: RequestOptions,
  ): Promise<components.Pet> {
    return unwrapAsync(petsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Deletes a pet
   */
  async delete(
    request: operations.DeletePetRequest,
    options?: RequestOptions,
  ): Promise<components.Pet> {
    return unwrapAsync(petsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * uploads an image
   */
  async uploadImage(
    request: operations.UploadFileRequest,
    options?: RequestOptions,
  ): Promise<components.ApiResponse> {
    return unwrapAsync(petsUploadImage(
      this,
      request,
      options,
    ));
  }
}