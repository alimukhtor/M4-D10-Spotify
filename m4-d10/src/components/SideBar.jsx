import {Link, useLocation} from 'react-router-dom'
const SideBar =()=>{
  const location = useLocation()
  return(

<div class="container-fluid">
    <div className="row">
        <div className="col-12">
            <div className="row">
            // SideBar
                <div className="col-2 d-none d-xl-block">
                    <div className="row">
                        <div className="side-bar col-12 px-0">
                            <a href="index.html"><img className="spotify-logo" src="../assets/spotify-logo.png" alt="sidebar-logo"/></a>

                            <a href="index.html" className="d-flex selected py-2">
                                <i className="bi bi-house-door mx-3"></i>
                                <p>Home</p>
                            </a>
                            <a href="../search/search.html" className="d-flex  py-2">
                                <i className="mx-3 bi bi-search"></i>
                                <p>Search</p>
                            </a>

                            <a href="../genres/genres.html" className="d-flex py-2">
                                <i className="bi bi-collection-play mx-3"></i>
                                <p>Your Library</p>
                            </a>
                            <Link to="/album-page">
                            <div className={'nav-link' + (location.pathname === '/album-page' ? ' active' : '')}>Albumsali</div>
                            </Link>
                            <a href="../albums/albums.html" className="d-flex py-2">
                                <i className="bi bi-vinyl mx-3"></i>
                                <p>Albums</p>
                            </a>

                            <a href="../artists/artists.html" className="d-flex py-2">
                                <i className="bi bi-music-note-beamed mx-3"></i>
                                <p>Artists</p>
                            </a>

                            <a href="../favourites/favourites.html" className="d-flex py-2">
                                <i className="bi bi-heart-fill mx-3"></i>
                                <p>Liked Songs</p>
                            </a>

                            <a href="../profile/profile.html" className="d-flex py-2">
                                <i className="bi bi-person-circle mx-3"></i>
                                <p>Account</p>
                            </a>

                            <div className="border-secondary">
                            <div className="other-links d-flex flex-column">
                                <a href="#good-morning-h3">Good Morning</a>
                                <a href="#recently-played-h4">Recently Played</a>
                                <a href="#shows-to-try-h4">Shows To Try</a>
                                <a href="#more-of-what-you-like-h4">More Of What You Like</a>
                                <a href="#hits-h4">Hits</a>
                                <a href="#the-best-of-2020-h4">The Best of 2020</a>
                                <a href="#jump-back-in-h4">Jump Back In</a>
                                <a href="#for-fans-of-sanah-h4">For Fans Of Sanah</a>
                                <a href="#">Your Top songs 2020</a>
                                <a href="#">In Love With You-Erykah B..</a>
                                <a href="#">FRANCHISE ft.Young Thig...</a>
                                <a href="#">This is road Stewart</a>
                                <a href="#">Your Top Songs 2019</a>
                                <a href="#">Metal Ballades</a>
                                <a href="#">Jazz Classics Blue Note...</a>
                                <a href="#" className="light-gray-text"><i className="bi bi-arrow-down-circle"> </i>Install app</a>
                            </div>
                        </div>
                    </div>
                </div>
                // SideBar ends
                // Smaller SideBar(ICONS)

                <div className="col-2 d-none d-lg-block d-xl-none">
                    <div className="row">
                        <div className="side-bar col-12 text-light px-0">
                            <a href="index.html"><img className="spotify-logo" src="../assets/spotify-logo.png" alt="sidebar-logo"/></a>

                            <a href="index.html" className="d-flex flex-column selected py-2 align-items-center justify-content-center">
                                <i className="bi bi-house-door"></i>
                                <p className="mx-0">Home</p>
                            </a>

                            <a href="../genres/genres.html" className="d-flex flex-column  py-2 align-items-center justify-content-center">
                                <i className="bi bi-collection-play"></i>
                                <p className="mx-0">Your Library</p>
                            </a>

                            <a href="../albums/albums.html" className="d-flex flex-column py-2 align-items-center justify-content-center">
                                <i className="bi bi-vinyl"></i>
                                <p className="mx-0">Albums</p>
                            </a>

                            <a href="../artists/artists.html" className="d-flex flex-column py-2 align-items-center justify-content-center">
                                <i className="bi bi-music-note-beamed"></i>
                                <p className="mx-0">Artists</p>
                            </a>

                            <a href="../favourites/favourites.html" className="d-flex flex-column py-2 align-items-center justify-content-center">
                                <i className="bi bi-heart-fill"></i>
                                <p className="mx-0">Liked Songs</p>
                            </a>

                            <a href="../profile/profile.html" className="d-flex flex-column py-2 align-items-center justify-content-center">
                                <i className="bi bi-person-circle mx-3"></i>
                                <p>Account</p>
                            </a>

                        </div>
                    </div>
                </div>

                //  small sidebar ends here

                //  MAIN PAGE CONTENT
                <div className="col-12 col-lg-10 main-page-content">

                    <div className="row">
                        <div className="col-12 hp-hero pt-2">
                            <div className="d-none d-md-flex justify-content-between">
                                <div className="d-flex mb-3">
                                    <div className="d-flex hp-hero-top circle-top mr-3">
                                        <div className="triangle-top-l"></div>
                                    </div>
                                    <div className="d-flex hp-hero-top circle-top">
                                        <div className="triangle-top-r"></div>
                                    </div>
                                </div>

                                <div className="search-bar">
                                    <div className="input-group my-3 ">
                                        <div className="input-group-prepend">
                                          <span className="input-group-text bg-dark" id="basic-addon1"><i className="bi bi-search text-white"></i></span>
                                        </div>
                                        <input type="text" name="q" className="form-control bg-dark text-white" placeholder="Songs, Artists, Albums" id="song-search"/>
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
                                            <p id="toggle-theme" className="mb-0">Change Theme</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 id="good-morning-h3"><strong>Good morning</strong></h3>

                            <div className="good-morning-container row">

                            </div>

                        </div>
                    </div>


                    <div className="row" id="artist1">
                        <div className="col-12 hp-sub-hero">

                            <div className="d-flex justify-content-between mt-4 mb-3 mx-0">
                                <h4 id="recently-played-h4">Artists</h4>
                                <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
                            </div>

                            <div className="row d-flex justify-content-center" id="artistContainer1">
                            </div>

                        </div>
                    </div>
                    //  REMAINING PAGE CONTENT ENDS HERE
                    <div className="row" id="album1">
                        <div className="col-12 hp-sub-hero">

                            <div className="d-flex justify-content-between mt-4 mb-3">
                                <h4 id="shows-to-try-h4">Albums</h4>
                                <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
                            </div>

                            <div className="row d-flex justify-content-center" id="albumContainer1">
                            </div>

                        </div>

                    </div>

                    <div className="row" id="artist2">
                        <div className="col-12 hp-sub-hero">

                            <div className="d-flex justify-content-between mt-4 mb-3">
                                <h4 id="more-of-what-you-like-h4">Artists</h4>
                                <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
                            </div>

                            <div className="row d-flex justify-content-center" id="artistContainer2">
                            </div>

                        </div>

                    </div>

                    <div className="row" id="album2">
                        <div className="col-12 hp-sub-hero">

                            <div className="d-flex justify-content-between mt-4 mb-3">
                                <h4 id="hits-h4">Albums</h4>
                                <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
                            </div>

                            <div className="row d-flex justify-content-center" id="albumContainer2">
                            </div>

                        </div>

                    </div>

                    <div className="row" id="artist3">
                        <div className="col-12 hp-sub-hero">

                            <div className="d-flex justify-content-between mt-4 mb-3">
                                <h4 id="the-best-of-2020-h4">Artists</h4>
                                <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
                            </div>


                            <div className="row d-flex justify-content-center" id="artistContainer3">
                            </div>

                        </div>

                    </div>

                    <div className="row" id="album3">
                        <div className="col-12 hp-sub-hero">

                            <div className="d-flex justify-content-between mt-4 mb-3">
                                <h4 id="jump-back-in-h4">Albums</h4>
                                <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
                            </div>


                            <div className="row d-flex justify-content-center" id="albumContainer3">
                            </div>

                        </div>

                    </div>

                    <div className="row" id="artist4">
                        <div className="col-12 hp-sub-hero">

                            <div className="d-flex justify-content-between mt-4 mb-3">
                                <h4 id="for-fans-of-sanah-h4">Artists</h4>
                                <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
                            </div>


                            <div className="row d-flex justify-content-center" id="artistContainer4">
                            </div>

                        </div>

                    </div>

                    <div className="row" id="album4">
                        <div className="col-12 hp-sub-hero">

                            <div className="d-flex justify-content-between mt-4 mb-3">
                                <h4 id="for-fans-of-sanah-h4">Albums</h4>
                                <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
                            </div>


                            <div className="row d-flex justify-content-center" id="albumContainer4">
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        //  MUSIC CONTROLS FOOTER
        <div className="row music-controls">

            <div className="col-10 col-lg-4">

                <div className="song-info-footer d-flex justify-content-center justify-content-lg-start">
                    <img className="d-none d-xl-block" src="./assets/ckay.jfif" alt=""/>
                    <div className="d-flex flex-column">
                        <p className="ml-3 mb-0 font-weight-bold">Love Nwantiti (ah ah ah)</p>
                        <p className="ml-3 light-gray-text smaller-text mb-0">CKay</p>
                    </div>
                    <i className="bi bi-heart ml-2"></i>
                </div>

            </div>

            <div className="col-2 d-lg-none">
                <i className="bi bi-play-circle-fill"></i>
            </div>
             <div className="col-3 d-lg-none nav-bar">
                <a href="./profile/profile.html" className="d-flex selected flex-column justify-content-center align-items-center py-2">
                    <i className="bi bi-person-circle mx-3"></i>
                    <p className="d-none d-sm-block mb-0">Account</p>
                </a>
            </div>
            <div className="col-3 d-lg-none nav-bar">
                <a href="index.html" className="d-flex selected flex-column justify-content-center align-items-center py-2">
                    <i className="bi bi-house-door mx-3"></i>
                    <p className="d-none d-sm-block mb-0">Home</p>
                </a>
            </div>

            <div className="col-3 d-lg-none nav-bar">
                <a href="#" className="d-flex flex-column justify-content-center align-items-center py-2">
                    <i className="bi bi-collection-play mx-3"></i>
                    <p className="d-none d-sm-block mb-0">Your Library</p>
                </a>
            </div>

            <div className="col-3 d-lg-none nav-bar">
                <a href="./albums/albums.html" className="d-flex flex-column justify-content-center align-items-center py-2">
                    <i className="bi bi-vinyl mx-3"></i>
                    <p className="d-none d-sm-block mb-0">Albums</p>
                </a>
            </div>

            <div className="col-3 d-lg-none nav-bar">
                <a href="./artists/artists.html" className="d-flex flex-column justify-content-center align-items-center py-2">
                    <i className="bi bi-music-note-beamed mx-3"></i>
                    <p className="d-none d-sm-block mb-0">Artists</p>
                </a>
            </div>

            <audio className="audio-play" src="../CKay.mp3">
            </audio>

            <div className="col-12 col-lg-4 d-none d-lg-flex flex-column align-items-center">
                <div className="music-controls-section d-flex align-items-center">
                    <i className="bi bi-shuffle mx-3 light-gray-text"></i>
                    <i className="bi bi-skip-backward-fill mx-3 light-gray-text"></i>
                    <button type="button" className="music-play-btn btn btn-success"><i className="bi bi-play-circle-fill"></i></button>
                    <button type="button" className="music-pause-btn btn btn-success"><i className="bi bi-pause-circle"></i></button>
                    <i className="bi bi-skip-forward-fill mx-3 light-gray-text"></i>
                    <i className="bi bi-arrow-repeat mx-3 light-gray-text"></i>
                </div>
                <div className="track-length d-flex align-items-center">
                    <p className="mb-0 mx-3">0:00</p>
                    <div className="track-bar"></div>
                    <p className="mb-0 mx-3">5:50</p>
                </div>
            </div>

            <div className="col-12 col-lg-4 d-none d-lg-flex justify-content-end align-items-center">
                <i className="bi bi-laptop mx-2 light-gray-text"></i>
                <i className="bi bi-volume-up mx-2 light-gray-text"></i>
                <div className="volume-bar"></div>
            </div>

        </div>
    </div>
    </div>
    </div>
  )
}
export default SideBar
