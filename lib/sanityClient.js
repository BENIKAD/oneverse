import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '3dha527v',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skpIrp7aOF042vJZgB3l3SJcMhMMSB9CMXUnWzQD4ssSyakz8BXNEJABMyeCNq64dXplOE3y8uCfBRBDjsW6b6QkeqhfZeTGpXc36dCpY95vn15AhK18QjDhxYln7LH12ueaATkgvqkfyZyrLslV19kOSAnyVSTmb5HNgtuordMKGk58FzN1',
  useCdn: false,
})