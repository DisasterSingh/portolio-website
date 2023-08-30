import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'w0qwstq9', 
  dataset: 'production', 
  useCdn: false 
})