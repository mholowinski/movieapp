
    let lat,lon

    const MAPI_KEY ="313e16483cee54d5e7f963a577d821f0"
    let finalURL=""
    let ratingURL=""
    let castURL=""
    let current_movie = 0;
    let moodID = 0;
    let check = 0;

    function getLocation(id) {
        if (navigator.geolocation) {
            let buttonRow = document.getElementById("buttonRow")
            buttonRow.classList.add("zoomOut")
            let simulateWeatherContainer = document.getElementById("simulateWeatherContainer")
            simulateWeatherContainer.classList.replace("zoomIn","zoomOut")

            moodID =id;
            navigator.geolocation.getCurrentPosition(showPosition);
            console.log("1");
        } else {
            buttonRow.innerHTML = "<p>Geolocation is not supported by this browser.</p>";
        }
    }

    function showPosition(position) {
      let buttonRow = document.getElementById("buttonRow")
      let simulateWeatherContainer = document.getElementById("simulateWeatherContainer")
      buttonRow.style.display = 'none'
      simulateWeatherContainer.style.display = 'none'

        let coords = document.getElementById("coords");
          coords.innerHTML = "Latitude: " + position.coords.latitude.toFixed(2)+
             "<br>Longitude: " + position.coords.longitude.toFixed(2);
        lon = position.coords.longitude;
        lat = position.coords.latitude
        let zapytanie = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude
        getData(zapytanie)

    }

    function getData(url) {
        let request = new XMLHttpRequest()
        request.open("GET", url)
        request.onload = function () {

            let weather = JSON.parse(request.responseText)
            let weatherDescription = document.getElementById("weatherDescription")
            let location = document.getElementById("location")
            let windSpeed = document.getElementById("windSpeed")
            let temperature = document.getElementById("temperature")
            let weatherIcon = document.getElementById("weatherIcon")

            weatherDescription.innerHTML = weather.weather[0].description
            location.innerHTML = weather.name
            windSpeed.innerHTML = weather.wind.speed
            temperature.innerHTML = weather.main.temp
            weatherIcon.innerHTML = "<img src=" + weather.weather[0].icon + ".png>" // Ikona z pogodą

            let hour = weather.dt
            let mtemp = weather.main.temp
            let weatherId = weather.weather[0].id
            let sunrise = weather.sys.sunrise
            let sunset = weather.sys.sunset

            let genere = null
            let keyword = null

            if (weatherId >= 100 && weatherId <= 804) {
                switch (moodID) {
                    case 1: // chill
                        if (hour >= sunrise && hour <= sunset) { //dzien
                            if (mtemp <= 0) {
                                genere = 99 //documentary
                                keyword = 714
                                console.log("Xd")
                                break;
                            }
                            if (mtemp > 0 && mtemp <= 15) {
                                keyword = 10683 //coming of age
                                genere = 12
                                break;
                            }
                            if (mtemp > 15) {
                                genere = 16 //animation
                                keyword = 10683
                                break;
                            }
                        } else { //noc
                            if (mtemp <= 0) {
                                genere = 10751 // family
                                keyword = 10683
                                break;
                            }
                            if (mtemp > 0 && mtemp <= 15) {
                                genere = 12 // fantasy
                                keyword = 704
                                break;
                            }
                            if (mtemp > 15) {
                                keyword = 13088 // sumer
                                genere = 80
                                break;
                            }
                        }

                    case 2: // mad
                        if (hour >= sunrise && hour <= sunset) { //dzien
                            if (mtemp <= 0) {
                                genere = 28 //action
                                keyword = 9748 //revenge
                                break;
                            }
                            if (mtemp > 0 && mtemp <= 15) {
                                genere = 28 //action
                                keyword = 9748
                                break;
                            }
                            if (mtemp > 15) {
                                keyword = 12339
                                genere = 27
                                break;
                            }
                        } else { //noc
                            if (mtemp <= 0) {
                                keyword = 10714
                                genere = 27
                                break;
                            }
                            if (mtemp > 0 && mtemp <= 15) {
                                genere = 27 //action
                                keyword = 205376
                                break;
                            }
                            if (mtemp > 15) {
                                genere = 28 //action
                                keyword = 9748
                                break;
                            }
                        }

                    case 3: // sad
                        if (hour >= sunrise && hour <= sunset) { //dzien
                            if (mtemp <= 0) {
                                genere = 18 // drama
                                keyword = 1647 // sadness
                                break;
                            }
                            if (mtemp > 0 && mtemp <= 15) {
                                genere = 18
                                keyword = 5625
                                break;
                            }
                            if (mtemp > 15) {
                                genere = 18
                                keyword = 210475
                            }
                        } else { //noc
                            if (mtemp <= 0) {
                                keyword = 4565 //dystopia
                                genere = 18 // drama

                                break;
                            }
                            if (mtemp > 0 && mtemp <= 15) {
                                keyword = 894 //depression
                                genere = 18
                                break;
                            }
                            if (mtemp > 15) {
                                genere = 18
                                keyword = 240119

                                break;
                            }
                        }

                    case 4: // happy
                        if (hour >= sunrise && hour <= sunset) { //dzien
                            if (mtemp <= 0) {
                                genere = 28
                                keyword = 183141
                                break;
                            }
                            if (mtemp > 0 && mtemp <= 15) {
                                genere = 12
                                keyword = 210246
                                break;
                            }
                            if (mtemp > 15) {
                                genere = 16
                                keyword = 249680
                                break;
                            }
                        } else { //noc
                            if (mtemp <= 0) {
                                genere = 14
                                keyword = 195114
                                break;
                            }
                            if (mtemp > 0 && mtemp <= 15) {
                                genere = 35
                                keyword = 245597
                                break;
                            }
                            if (mtemp > 15) {
                                genere = 35
                                keyword = 54169
                                break;
                            }
                        }
                    case 5: // frisky
                        if (hour >= sunrise && hour <= sunset) { //dzien
                            if (mtemp <= 0) {
                                genere = 10749
                                keyword = 186956
                                break;
                            }
                            if (mtemp > 0 && mtemp <= 15) {
                                genere = 10749
                                keyword = 236874
                                break;
                            }
                            if (mtemp > 15) {
                                genere = 10749
                                keyword = 206715
                                break;
                            }
                        } else { //noc
                            if (mtemp <= 0) {
                                genere = 10749
                                keyword = 188237
                                break;
                            }
                            if (mtemp > 0 && mtemp <= 15) {
                                genere = 10749
                                keyword = 186956
                                break;
                            }
                            if (mtemp > 15) {
                                genere = 10749
                                keyword = 200129
                                break;
                            }
                        }
                }
            }
            if (weatherId >= 200 && weatherId <= 232) {
                keyword = 18171
            }
            if (weatherId >= 300 && weatherId <= 321) {
                keyword = 2217
            }
            if (weatherId >= 500 && weatherId <= 531) {
                keyword = 2217
            }
            if (weatherId >= 600 && weatherId <= 622) {
                keyword = 10794
            }
            if (weatherId >= 701 && weatherId <= 711) {
                keyword = 169613
            }

            finalURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + MAPI_KEY + "&sort_by=page=1&with_genres=" + genere + "&with_keywords=" + keyword
            console.log(finalURL)
            console.log(weatherId)
            getMovieData(finalURL, 0)

        }
        request.send()
    }

    function getMovieData(url,counter) {
        let request = new XMLHttpRequest()
        request.open("GET",url)
        request.onload =function () {
            let movie = JSON.parse(request.responseText)

            if (check==0) {
              console.log(movie.results)
              check++;
            }


            let poster = document.getElementById("poster")
            let poster2 = document.getElementById("poster2")
            let poster3 = document.getElementById("poster3")
            let poster4 = document.getElementById("poster4")
            let title = document.getElementById("title")
            let description =document.getElementById("description")
            const posterpaths =[]
            console.log("counter: " +counter);
            console.log("movie result length: " + movie.results.length);






            for (let i=0 ; i<4 ; i++){
              if(movie.results[counter+i] == null ){
                posterpaths[i+counter] ="https://dummyimage.com/185x280/fff/000&text=Out+of+movies!"
                console.log("Xd");
              }else {
                if (movie.results[counter+i].poster_path == null){ //jeśli nie ma jakiegoś plakatu zamienia na placeholder (szarak)
                    posterpaths[i+counter] ="https://dummyimage.com/185x280/ffffff/00000&text=Unable+to+fetch+poster"
                }else{
                    posterpaths[counter+i] = "https://image.tmdb.org/t/p/w185"+movie.results[counter+i].poster_path
                }
              }

            }

            let buttonNext =document.getElementById("buttonNext")
            buttonNext.classList.remove("invisible")
            let bigContainer = document.getElementById("bigContainer")
            bigContainer.classList.remove("invisible")
            bigContainer.classList.add("zoomIn")

            if (counter+1 == movie.results.length ){
              let buttonNextExact = document.getElementById("buttonNextExact")
              buttonNextExact.classList.add("invisible")
            }



            poster.innerHTML="<img height='250px' width='250px' src="+posterpaths[counter]+" class=\"img-thumbnail\" >"
            poster2.innerHTML="<img class=\"img-thumbnail\" src="+posterpaths[counter+1]+">"
            poster3.innerHTML="<img class=\"img-thumbnail\" src="+posterpaths[counter+2]+">"
            poster4.innerHTML="<img class=\"img-thumbnail\" src="+posterpaths[counter+3]+">"

            // printowanie tyułu i opisu
            description.innerHTML="<i>"+movie.results[counter].overview+"<i/>"
            title.innerHTML="  <h1 id=\"movie_title\">"+movie.results[counter].title+"       " +
                "            <small class=\"font-italic\">("+movie.results[counter].release_date.slice(0,4)+")</small>\n" +
                "            </h1>\n"

            castURL="https://api.themoviedb.org/3/movie/"+movie.results[counter].id+"/credits?api_key="+MAPI_KEY
            ratingURL="https://api.themoviedb.org/3/movie/"+movie.results[counter].id+"?api_key="+MAPI_KEY
            getCast(castURL)
            getRating(ratingURL)
            current_movie=current_movie+1; // zwiekszam counter == przewijam liste

        }
        request.send();
    }

    function getCast (url){
        let request = new XMLHttpRequest()
        request.open("GET",url)
        request.onload =function () {
            let cast = JSON.parse(request.responseText)
            let castlist = document.getElementById("cast")
            castlist.innerHTML="Cast: " +cast.cast[0].name+ ", "+cast.cast[1].name+", "+cast.cast[2].name+" "
        }
        request.send();
    }

    function getRating(url) {
        let request = new XMLHttpRequest()
        request.open("GET", url)
        request.onload = function () {
            let rating = JSON.parse(request.responseText)
            let ratinglist = document.getElementById("rating")
            ratinglist.innerHTML = " Rating: " + rating.vote_average + " / 10" +
                "   <br> Runtime: " + rating.runtime + " min </br> "
        }
        request.send();
    }

    function showWeatherSimulation(){
      let simulateWeatherContainer = document.getElementById("simulateWeatherContainer")
      simulateWeatherContainer.style.display = 'block'
    }
