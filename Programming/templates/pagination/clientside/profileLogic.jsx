useEffect(() => {
  // the the list shown to the user is updated everytime the user successfully:
  // - access the profile page (init)
  // - added new secret
  // - delete a secret
  // - change the page
  if (loading === 'init' || loading === 'new secret added' || loading === 'secret deleted' || loading === 'change page') {
    const getUserSecrets = async () => {
      c('getUserSecrets running')
      console.log(demandedPage);
      // requesting the list of secrets in the desired page
      const result = await req('usersecrets', 'POST', { paginationMode: 'on demand', page: demandedPage })
      if (result.result) {
        // save the to be shown secrets
        setSecretArr(result.result)
        // calculating the total pages
        let pages
        if (result.numberOfSecrets < 10) {
          pages = 1
        } else {
          const leftoverDoc = result.numberOfSecrets % 10
          const extraPage = leftoverDoc === 0 ? 0 : 1
          pages = ((result.numberOfSecrets - leftoverDoc) / 10) + extraPage
        }
        console.log(pages);
        setTotalPages(pages)
      } else {
        alert('something is wrong, result key not found in server response')
      }
      setLoading(false)
    }
    getUserSecrets()
  }
}, [loading, demandedPage])

// producing the button of pages according the total page state
// the weakness is if the user have so much page then all the page button will show at the same time,
// we have to save all the page number in one array and only show one slice of it according to the
// current page. that program is not writen here yet
const paginationButton = () => {
  if (totalPages === '') {
    return ''
  } else {
    let buttonArr = []
    for (let i = 0; i < totalPages; i++) {
      buttonArr.push(<button key={i} onClick={() => {
        setDemandedPage(i + 1)
        setLoading('change page')
      }}>{i + 1}</button>)
    }
    return buttonArr
  }
}