export default function isFetching (state, action) {
  return (action.type.search('_PENDING') !== -1)
}
