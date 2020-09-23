export default (target, varArgs) => {
  const to = Object(target);

  for (const nextKey in varArgs) {
    // Avoid bugs when hasOwnProperty is shadowed
    if (Object.prototype.hasOwnProperty.call(varArgs, nextKey)) {
      to[nextKey] = varArgs[nextKey]
    }
  }
  return to
}
