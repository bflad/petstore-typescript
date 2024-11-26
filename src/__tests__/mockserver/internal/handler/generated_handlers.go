// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"context"
	"net/http"

	"mockserver/internal/logging"
)

// GeneratedHandlers returns all generated handlers.
func GeneratedHandlers(ctx context.Context, dir *logging.HTTPFileDirectory) []*GeneratedHandler {
	return []*GeneratedHandler{
		NewGeneratedHandler(ctx, http.MethodDelete, "/pet/{petId}", pathDeletePetPetID(dir)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/store/order/{orderId}", pathDeleteStoreOrderOrderID(dir)),
		NewGeneratedHandler(ctx, http.MethodDelete, "/user/{username}", pathDeleteUserUsername(dir)),
		NewGeneratedHandler(ctx, http.MethodGet, "/pet/findByStatus", pathGetPetFindByStatus(dir)),
		NewGeneratedHandler(ctx, http.MethodGet, "/pet/findByTags", pathGetPetFindByTags(dir)),
		NewGeneratedHandler(ctx, http.MethodGet, "/pet/{petId}", pathGetPetPetID(dir)),
		NewGeneratedHandler(ctx, http.MethodGet, "/store/inventory", pathGetStoreInventory(dir)),
		NewGeneratedHandler(ctx, http.MethodGet, "/store/order/{orderId}", pathGetStoreOrderOrderID(dir)),
		NewGeneratedHandler(ctx, http.MethodGet, "/user/login", pathGetUserLogin(dir)),
		NewGeneratedHandler(ctx, http.MethodGet, "/user/logout", pathGetUserLogout(dir)),
		NewGeneratedHandler(ctx, http.MethodGet, "/user/{username}", pathGetUserUsername(dir)),
		NewGeneratedHandler(ctx, http.MethodPost, "/pet", pathPostPet(dir)),
		NewGeneratedHandler(ctx, http.MethodPost, "/store/order", pathPostStoreOrder(dir)),
		NewGeneratedHandler(ctx, http.MethodPost, "/user", pathPostUser(dir)),
		NewGeneratedHandler(ctx, http.MethodPost, "/user/createWithList", pathPostUserCreateWithList(dir)),
		NewGeneratedHandler(ctx, http.MethodPut, "/pet", pathPutPet(dir)),
		NewGeneratedHandler(ctx, http.MethodPut, "/user/{username}", pathPutUserUsername(dir)),
	}
}
