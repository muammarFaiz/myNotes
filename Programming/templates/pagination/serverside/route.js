router.post('/usersecrets', verifyToken, async (req, res) => {
  const paginationMode = req.body.paginationMode
  const ondemandPage = req.body.page || 1
  const idIndex = req.body.idIndex
  const docPerPage = req.body.docPerPage || 10
  const userid = req.theUserDoc._id
  let secrets
  let secretNumbers

  // on demand pagination is where user can skip to page whatever from page one
  if (paginationMode === 'on demand') {
    // user secrets means the content/post on each page
    // for on demand pagination, if you do not want to use the skip() method from mongodb then you have to
    // create a document that contain an array of users secret number for each user in a "pagination" collection
    // so whenever a user go to a certain page first we get their array of secret number so we can slice() it
    // according to the requested page, and get the secrets/content according to the sliced numbers of array
    const paginationDoc = await paginationModel.findOne({ userid: userid })
    secretNumbers = paginationDoc.secret_numbers
    c(secretNumbers)
    // const skips = (ondemandPage - 1) * docPerPage
    const skips = secretNumbers.length - (docPerPage * ondemandPage)
    // the skip number is high because the the server need to return a sorted secrets start from the most recent ones
    // that mean the latest post/content/secret
    const nonNegativeSkip = skips < 0 ? 0 : skips
    // the nonnegativeskip is there because the skips can produce negative number when reached the last page,
    // which mean the secrets for the last page sometimes is less than the docPerPage
    const notTooMuchCut = skips < 0 ? secretNumbers.length % docPerPage : docPerPage
    // the nottoomuchcut is for the same reason, the last page does not always have a maximum number of
    // secrets/content
    console.log(notTooMuchCut);
    // slicing the array of secret number for the desired page
    const docsToShow = secretNumbers.slice(nonNegativeSkip, nonNegativeSkip + notTooMuchCut)
    console.log(docsToShow);
    // finally get the secrets according to the sliced number array
    secrets = await secretModel.find({
      creatorId: userid, n: { $in: docsToShow }
    }).sort({ _id: -1 })
    console.log(secrets);

  // this is for a regular pagination, where user must go through each each page to the desired page by
  // clicking "next page"
  } else {
    if (idIndex) {
      secrets = await secretModel.find({ creatorId: userid, _id: { $gt: idIndex } })
        .sort({ _id: -1 })
        .limit(docPerPage)
    } else {
      secrets = await secretModel.find({ creatorId: userid })
        .sort({ _id: -1 })
        .limit(docPerPage)
    }
  }
  return res.json({
    result: secrets,
    numberOfSecrets: secretNumbers.length
  })
})