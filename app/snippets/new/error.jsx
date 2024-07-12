"use client";

export default function ErrorPage({ error }) {
  return (
    <div>{error.message}</div>
  )
}
