var BikesHub = {
    "Honda": {
        "CD 70": {
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYq9OmyDkpgywDc5ggV67Q_MdYuoKAaog0Q&usqp=CAU",
            "engine": "72cc",
            "fuel_type": "Petrol",
            "model": "2016",
            "mileage": "Up to 80 kmpl",
            "price": "PKR 79,900"
        },
        "CG 125": {
            Image: "https://cache2.pakwheels.com/ad_pictures/9142/honda-cg-125-2-2023-91421366.webp",
            "engine": "125cc",
            "fuel_type": "Petrol",
            "model": "2018",
            "mileage": "Up to 50 kmpl",
            "price": "PKR 141,900"
        },
        "CB 150F": {
            Image: "https://ahsanautos.pk/wp-content/uploads/2022/12/cb-150f-red-color-min.png",
            "engine": "150cc",
            "fuel_type": "Petrol",
            "model": "2020",
            "mileage": "Up to 40 kmpl",
            "price": "PKR 284,900"
        }
    },
    "Suzuki": {
        "GS 150": {
            Image: "https://cache3.pakwheels.com/system/bike_model_pictures/1405/original/3.jpg?1666261928",
            "engine": "150cc",
            "fuel_type": "Petrol",
            "model": "2022",
            "mileage": "Up to 45 kmpl",
            "price": "PKR 189,900"
        },
        "GD 110S": {
            Image: "https://cache2.pakwheels.com/system/bike_model_pictures/939/original/Suzuki_GD110.jpg?1448540965",
            "engine": "110cc",
            "fuel_type": "Petrol",
            "model": "2024",
            "mileage": "Up to 60 kmpl",
            "price": "PKR 198,000"
        },
        "GSX-R600": {
            Image: "https://www.cycleworld.com/resizer/Lnf-sbdPr9FdYAVdDjq7YbjMA5c=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/BMKMWAZP45FYNPJUONWABCYR4M.jpg",
            "engine": "600cc",
            "fuel_type": "Petrol",
            "model": "2010",
            "mileage": "Up to 22 kmpl",
            "price": "PKR 1,749,000"
        }
    },
    "Yamaha": {
        "YB 125Z": {
            Image: "https://www.farmingguider.com/wp-content/uploads/2021/10/Yamaha-YB-125Z-2021-Price-in-Pakistan-Specs-Features-1200x720.jpg",
            "engine": "125cc",
            "fuel_type": "Petrol",
            "model": "2017",
            "mileage": "Up to 50 kmpl",
            "price": "PKR 151,000"
        },
        "YBR 125": {
            Image: "https://www.yamaha-motor.com.pk/wp-content/uploads/2023/12/Inner-Product-green.png",
            "engine": "125cc",
            "fuel_type": "Petrol",
            "model": "2015",
            "mileage": "Up to 45 kmpl",
            "price": "PKR 175,500"
        },
        "Yamaha YZF-R6": {
            Image: "https://quickbutik.imgix.net/9603t/products/645f5e80d75de.jpeg",
            "engine": "600cc",
            "fuel_type": "Petrol",
            "model": "2013",
            "mileage": "Up to 20 kmpl",
            "price": "PKR 2,000,000"
        }
    },
    "United": {
        "US 70": {
            Image: "https://cache2.pakwheels.com/ad_pictures/9354/united-us-70-2023-93543951.webp",
            "engine": "70cc",
            "fuel_type": "Petrol",
            "model": "2012",
            "mileage": "Up to 70 kmpl",
            "price": "PKR 51,500"
        },
        "US 100": {
            Image: "https://ahsanautos.pk/wp-content/uploads/2022/12/United-100-Red-AhsanAutos.pk-min.png",
            "engine": "100cc",
            "fuel_type": "Petrol",
            "model": "2021",
            "mileage": "Up to 60 kmpl",
            "price": "PKR 64,000"
        },
        "US 125": {
            Image: "https://cache2.pakwheels.com/system/bike_model_pictures/1937/medium/1.jpg?1671778879",
            "engine": "125cc",
            "fuel_type": "Petrol",
            "model": "2023",
            "mileage": "Up to 50 kmpl",
            "price": "PKR 77,500"
        }
    }
}
var main = document.getElementById("main");
var brand = document.getElementById("brand");
var model = document.getElementById("model");
brand.innerHTML = `<option>Select brand name</option>`
model.innerHTML = `<option>Select model name</option>`

function renderAllBikes() {

    for (var key in BikesHub) {
        console.log(key)
        brand.innerHTML += `<option value='${key}'>${key}</option>`
        for (var key1 in BikesHub[key]) {
            var obj = BikesHub[key][key1];
            console.log(obj)
            main.innerHTML += `
     <div class="col-12 col-sm-2 col-md-6 col-lg-3 mb-2 ">
     <div class="card" style="width: 18rem;">
         <img src="${obj.Image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMn85XOS33tOMmwIubXr0FlD4kGNI3xVulVw&usqp=CAU"}"
             class="card-img-top" alt="...">
         <div class="card-body">
             <h5 class="card-title">${key1.toUpperCase()} (${obj.model})</h5>
             <p class="card-text">${obj.engine}
             <br />
             ${obj.fuel_type}
             <br />
             ${obj.mileage}
             <br />
             </p>
            <h6>${obj.price}</h6>
         </div>
     </div>
 </div> `
        }
    }
}

renderAllBikes()


function setModel() {
    model.innerHTML = "";
    model.innerHTML = `<option>Select model name</option>`
    for (var key in BikesHub[brand.value]) {
        model.innerHTML += `<option value='${key}'>${key}</option>`
    }

}

var bikeDetail = document.getElementById('bike-Detail');

function searchBike() {
    main.style.display = "none";
    bikeDetail.style.display = "flex";
    var bike = BikesHub[brand.value][model.value];

    bikeDetail.innerHTML = `
 <div class="card mb-3>
 <div class="row g-0">
     <div class="col-md-4">
         <img src="${bike.Image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYq9OmyDkpgywDc5ggV67Q_MdYuoKAaog0Q&usqp=CAU"}" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-md-8">
         <div class="card-body">
             <h5 class="card-title">${model.value.toUpperCase()}</h5>
             <p class="card-text">${bike.engine}
             <br />
             ${bike.fuel_type}
             <br />
             ${bike.mileage}
             <br />
             </p>
            <h6>${bike.price}</h6>
         </div>
     </div>
 </div>
</div>`
}

function clearSearch() {
    bikeDetail.style.display = "none";
    main.style.display = "flex";
}
