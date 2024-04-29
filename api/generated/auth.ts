/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Everform API Documentation
 * Everform API Documentation
 * OpenAPI spec version: 1.0.0
 */
import { useMutation } from "@tanstack/react-query"
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query"
import axios from "axios"
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

import type { PostLogin200, PostLogin401, PostLoginBody } from "./models"

/**
 * Login
 * @summary Login
 */
export const postLogin = (
  postLoginBody: PostLoginBody,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<PostLogin200>> => {
  return axios.post(`/login`, postLoginBody, options)
}

export const getPostLoginMutationOptions = <
  TError = AxiosError<PostLogin401>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postLogin>>,
    TError,
    { data: PostLoginBody },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof postLogin>>,
  TError,
  { data: PostLoginBody },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postLogin>>,
    { data: PostLoginBody }
  > = (props) => {
    const { data } = props ?? {}

    return postLogin(data, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostLoginMutationResult = NonNullable<
  Awaited<ReturnType<typeof postLogin>>
>
export type PostLoginMutationBody = PostLoginBody
export type PostLoginMutationError = AxiosError<PostLogin401>

/**
 * @summary Login
 */
export const usePostLogin = <
  TError = AxiosError<PostLogin401>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postLogin>>,
    TError,
    { data: PostLoginBody },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationResult<
  Awaited<ReturnType<typeof postLogin>>,
  TError,
  { data: PostLoginBody },
  TContext
> => {
  const mutationOptions = getPostLoginMutationOptions(options)

  return useMutation(mutationOptions)
}
