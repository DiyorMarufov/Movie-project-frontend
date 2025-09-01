import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";
import type { IActorDetail } from "..";

export const actorKey = "actorKey";

export const useActors = () => {
  const getActorById = (id: number) =>
    useQuery<IActorDetail>({
      queryKey: [actorKey, id],
      queryFn: () => api.get(`person/${id}`).then((res) => res.data),
    });

  const getActorItemsById = (id: number, path: string) =>
    useQuery({
      queryKey: [actorKey, id, path],
      queryFn: () => api.get(`person/${id}/${path}`).then((res) => res.data),
    });

  return { getActorById, getActorItemsById };
};
