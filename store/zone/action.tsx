
import FavoriteHandler from "services/favorite";
import { IFavActions } from "services/favorite/IFavorite";

export type ZoneActionTypes = "ZONE_ADD" | "ZONE_REMOVE"
export const zoneActionTypes: { [id: string]: string } & IFavActions = {
    ADD: "ZONE_ADD",
    REMOVE: "ZONE_REMOVE",
}

export const { addToFavorite, removeFavorite } = FavoriteHandler(zoneActionTypes)