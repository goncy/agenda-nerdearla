# POC for searchParams and Suspense
* When client navigation happens (and server components request data) the app should be suspended and it's not happening (data fetching was removed from this example).
* Also, getting `searchParams` from `useSearchParams` handles arrays in search params correctly but doing `new URLSearchParams(searchParams)` in a server component doesn't.
