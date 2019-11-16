export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Nowa wersja aplikacji została pobrana. ` +
    `Czy chcesz przeładować?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
