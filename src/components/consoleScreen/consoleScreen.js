function Bar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-right">
    {/* <!-- <a class="navbar-brand" href="#">D-Pad</a> --> */}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Swipe <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="portfolio.html">Playlist</a>
            </li>
        </ul>
        <span class="navbar-text">
        </span>
    </div>
    </nav>
    
  );
}

export default Bar;
