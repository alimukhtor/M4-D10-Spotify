const AlbumPage =()=> {
  return(
    <div className="col-12 col-lg-10 main-page-content px-0">
         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="0">
            <div className="carousel-inner">
              <div className="carousel-item active">

                <div id="album-header-container">


                    <div className="d-flex px-4 justify-content-end">

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

                    <div className="album-content row pl-4 mx-0">

                        <div className="d-flex">

                            <img className="ml-5 d-none d-sm-block" src="../assets/cards/52.jpg" alt=""/>
                            <div className="d-flex flex-column album-content-text ml-4">
                                <p className="album-badge d-none d-sm-block text-white">PLAYLIST</p>
                                <h3 className="album-title">Bohemian Rhapsody</h3>

                                <p className="text-white">Created by <span className="text-light">Queen.</span> 30 songs, 2 hr 23 min</p>
                                <div className="d-flex flex-row ">
                                    <button type="button" className=" carasoul-btn1 text-center my-1 rounded-pill btn btn-success">PLAY</button>
                                    <button type="button" className="btn-saved text-center ml-3 my-1 rounded-pill btn btn-dark text-success">SAVED</button>
                                    <i className="rounded-circle dot-icon bi bi-three-dots text-white"></i>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

              </div>

              <div className="carousel-item">

                <div id="album-header-container">


                    <div className="d-flex px-4 justify-content-end">

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

                    <div className="album-content row pl-4 mx-0">

                        <div className="d-flex">

                            <img className="ml-5 d-none d-sm-block" src="../assets/car-pic2.jpg" alt=""/>
                            <div className="d-flex flex-column album-content-text ml-4">
                                <p className="album-badge d-none d-sm-block text-white">PLAYLIST</p>
                                <h3 className="album-title">Brad Indie</h3>
                                <p className="text-white">Created by <span className="text-light">Brad Acord.</span> 30 songs, 2 hr 23 min</p>
                                <div className="d-flex flex-row ">
                                    <button type="button" className="rounded-pill btn btn-success carasoul-btn1">PLAY</button>
                                    <button type="button" className="ml-3 my-1 btn-saved text-center rounded-pill btn btn-dark text-success">SAVED</button>
                                    <i className="text-white rounded-circle dot-icon bi bi-three-dots"></i>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

              <div className="carousel-item">

                <div id="album-header-container">


                    <div className="d-flex px-4 justify-content-end">

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

                    <div className="album-content row pl-4 mx-0">

                        <div className="d-flex">

                            <img className="ml-5 d-none d-sm-block" src="../assets/car-pic3.jpg" alt=""/>
                            <div className="d-flex flex-column album-content-text ml-4">
                                <p className="album-badge d-none d-sm-block text-white">Album From Your Library</p>
                                <h3 className="album-title">Dark Matter</h3>
                                <p className="text-white">By <span className="text-light">The Word Alive</span></p>
                                <span className="profile-name text-white"> 2016 • 12 songs, 1hr 19min <span className="text-light">• View full album</span></span>
                                <div className="d-flex flex-row carasoul-btns">
                                    <button type="button" className=" carasoul-btn1 text-center my-1 rounded-pill btn btn-success">PLAY</button>
                                    <button type="button" className="btn-saved text-center ml-3 my-1 rounded-pill btn btn-dark text-success">SAVED</button>
                                    <i className="rounded-circle dot-icon bi bi-three-dots text-white"></i>
                                </div>
                            </div>

                        </div>
                    </div>

                 </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>


        <div id="album-songs-container" className="bg-wrapper px-4">
            <div className="row my-3 album-controls">
                <div className="col-12 album-action-icons d-flex align-items-center">
                    <i className="bi bi-play-circle-fill"><div className="white-bg"></div></i>
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-three-dots"></i>
                </div>
            </div>

            <div className="row light-gray-text">

                <div className="col-1">
                    <p>#</p>
                </div>

                <div className="col-10">
                    <p>Title</p>
                </div>

                <div className="col-1">
                    <p><i className="bi bi-clock"></i></p>
                </div>

            </div>
            <div className="divider"></div>
        </div>
    </div>

</div>
  )
}
export default AlbumPage
