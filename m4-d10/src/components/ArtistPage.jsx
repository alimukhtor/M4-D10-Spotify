const ArtistPage =()=> {
  return(
    <div className="col-12 px-0 mx-0 col-lg-12 main-page-content">

        <div className="row album-img-header">
            <div className="col-12">
                <div className="album-header-image">
                <div className="d-flex justify-content-between">
                    <div className="d-flex mb-3">
                        <div className="d-flex hp-hero-top circle-top mr-3">
                            <div className="triangle-top-l"></div>
                        </div>
                        <div className="d-flex hp-hero-top circle-top">
                            <div className="triangle-top-r"></div>
                        </div>
                    </div>

                    <div className="account">
                        <div className="btn-group">
                            <button className="btn btn-sm bg-black dropdown-toggle rounded-pill" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg> Your Name
                            </button>
                            <div className="dropdown-menu">
                                ...
                            </div>
                        </div>
                    </div>

                </div>

                <div className="album-info">
                    <div className="row m-0 verified-artist-badge">

                        <img src="./assets/verified.jpg" width="50" height="50" alt="logo-verified"/> <h6 className="d-inline-block mb-0 ml-2">Verified Artist</h6>
                    </div>
                    <p className="artist-queen"><strong>Queen</strong></p>
                    <p>37,120,733 monthly listeners</p>
                </div>

                </div>
            </div>
        </div>


            <div className="bg-wrapper">
            <div className="row py-2 pl-5">
                <div className="col-12 album-action-icons d-flex align-items-center px-0">
                    <i className="bi bi-pause-circle-fill"></i>
                    <span className="follow-btn rounded">FOLLOW</span>
                    <i className="bi bi-three-dots"></i>
                </div>
            </div>

            <div className="row">
                <div className=" col-12 col-lg-9 pl-5">

                    <div id="popular-songs-container" className="row px-2">

                        <div className="col-12">
                            <h3>Popular</h3>
                        </div>
                        <div className="d-flex flex-row col-9 position-relative">
                            <h4 className="title">title</h4>
                            <h4 className="duration">duration</h4>
                        </div>
                    </div>

                    <div className="rowBody col-12 mt-2">
                        <p className="light-gray-text see-more">SEE MORE</p>
                    </div>

                </div>


                <div className="col-12 col-lg-3">
                    <h3 className="">Artist Pick</h3>

                    <div className="row">

                        <div className="col-3 col-lg-12 col-xl-3">
                            <img className="artist-pick-img" src="./assets/cards/7.jpg" alt=""/>
                        </div>

                        <div className="col-9 col-lg-12 col-xl-9">
                            <div className="d-flex posted-by">
                                <img src="./assets/cards/8.jpg" className="mr-2" id ="img-Artist" alt=""/>
                                <p className="light-gray-text smaller-text font-weight-bold mb-1" id="posted-ByArtist">Posted By Queen</p>
                            </div>
                            <h6 className="mb-1" id="bestOfArtist">Queen</h6>
                            <p className="light-gray-text smaller-text font-weight-bold">Best Of Playlist</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        </div>
  )
}
export default ArtistPage
