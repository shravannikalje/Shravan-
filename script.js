function searchProperties() {
    let location = document.getElementById("location").value;
    let resultsDiv = document.getElementById("results");

    if (!location) {
        resultsDiv.innerHTML = "<p>Nasarapur</p>";
        return;
    }

    // प्रॉपर्टी डेटा (कस्टमाइझ करा)
    let properties = [
        { city: "Nasarapur", rent: "₹15,000", owner: "Shravan", phone: "7823802792" },
        { city: "Pune", rent: "₹25,000", owner: "सुरेश", phone: "9876543211" },
        { city: "दिल्ली", rent: "₹20,000", owner: "सीमा", phone: "9876543212" }
        // इतर प्रॉपर्टीज
        // { city: "Mumbai", rent: "₹30,000", owner: "राधा", phone: "9876543213" },
        // { city: "Banglore", rent: "₹35,000", owner: "मोहन", phone: "9876543214" },
        // { city: "Chennai", rent: "₹40,000", owner: "सीता", phone: "9876543215" },
        // { city: "Hyderabad", rent: "₹45,000", owner: "राम", phone: "9876543216" },
        // { city: "Ahmedabad", rent: "₹50,000", owner: "सीमा", phone: "9876543217" },
        // { city: "Kolkata", rent: "₹55,000", owner: "सुरेश", phone: "9876543218" },
        // { city: "Jaipur", rent: "₹60,000", owner: "राधा", phone: "9876543219" },
        // { city: "Lucknow", rent: "₹65,000", owner: "मोहन", phone: "9876543220" },
        // { city: "Kanpur", rent: "₹70,000", owner: "सीता", phone: "9876543221" },
        // { city: "Nagpur", rent: "₹75,000", owner: "राम", phone: "9876543222" },
        // { city: "Indore", rent: "₹80,000", owner: "सीमा", phone: "9876543223" },
        // { city: "Bhopal", rent: "₹85,000", owner: "सुरेश", phone: "9876543224" },
        // { city: "Surat", rent: "₹90,000", owner: "राधा", phone: "9876543225" },
        // { city: "Vadodara", rent: "₹95,000", owner: "मोहन", phone: "9876543226" },
        // { city: "Visakhapatnam", rent: "₹100,000", owner: "सीता", phone: "9876543227" },
        // { city: "Coimbatore", rent: "₹105,000", owner: "राम", phone: "9876543228" },
        // { city: "Patna", rent: "₹110,000", owner: "सीमा", phone: "9876543229" },
        // { city: "Nashik", rent: "₹115,000", owner: "सुरेश", phone: "9876543230" },
        // { city: "Aurangabad", rent: "₹120,000", owner: "राधा", phone: "9876543231" },
        // { city: "Mysore", rent: "₹125,000", owner: "मोहन", phone: "9876543232" },
        // { city: "Vadodara", rent: "₹130,000", owner: "सीता", phone: "9876543233" },
        // { city: "Rajkot", rent: "₹135,000", owner: "राम", phone: "9876543234" },
        // { city: "Guwahati", rent: "₹140,000", owner: "सीमा", phone: "9876543235" },
        // { city: "Agra", rent: "₹145,000", owner: "सुरेश", phone: "9876543236" },
        // { city: "Dehradun", rent: "₹150,000", owner: "राधा", phone: "9876543237" },
        // { city: "Ranchi", rent: "₹155,000", owner: "मोहन", phone: "9876543238" },
        // { city: "Raipur", rent: "₹160,000", owner: "सीता", phone: "9876543239" },
        // { city: "Bhubaneswar", rent: "₹165,000", owner: "राम", phone: "9876543240" },
        // { city: "Amritsar", rent: "₹170,000", owner: "सीमा", phone: "9876543241" },
        // { city: "Ludhiana", rent: "₹175,000", owner: "सुरेश", phone: "9876543242" },
        // { city: "Jodhpur", rent: "₹180,000", owner: "राधा", phone: "9876543243" },
        // { city: "Udaipur", rent: "₹185,000", owner: "मोहन", phone: "9876543244" },
        // { city: "Shimla", rent: "₹190,000", owner: "सीता", phone: "9876543245" },
        // { city: "Manali", rent: "₹195,000", owner: "राम", phone: "9876543246" },
        // { city: "Darjeeling", rent: "₹200,000", owner: "सीमा", phone: "9876543247" },
        // { city: "Gangtok", rent: "₹205,000", owner: "सुरेश", phone: "9876543248" },
        // { city: "Leh", rent: "₹210,000", owner: "राधा", phone: "9876543249" },
        // { city: "Kargil", rent: "₹215,000", owner: "मोहन", phone: "9876543250" },
        // { city: "Aizawl", rent: "₹220,000", owner: "सीता", phone: "9876543251" },
        // { city: "Imphal", rent: "₹225,000", owner: "राम", phone: "9876543252" },
        // { city: "Agartala", rent: "₹230,000", owner: "सीमा", phone: "9876543253" },
        // { city: "Shillong", rent: "₹235,000", owner: "सुरेश", phone: "9876543254" },
        // { city: "Itanagar", rent: "₹240,000", owner: "राधा", phone: "9876543255" },
        // { city: "Dispur", rent: "₹245,000", owner: "मोहन", phone: "9876543256" },
        // { city: "Agra", rent: "₹250,000", owner: "सीता", phone: "9876543257" },
        // { city: "Varanasi", rent: "₹255,000", owner: "राम", phone: "9876543258" },
        // { city: "Allahabad", rent: "₹260,000", owner: "सीमा", phone: "9876543259" },
        // { city: "Kanpur", rent: "₹265,000", owner: "सुरेश", phone: "9876543260" },

    ];

    let filteredProperties = properties.filter(p => p.city.toLowerCase().includes(location.toLowerCase()));

    resultsDiv.innerHTML = filteredProperties.length ? filteredProperties.map(p => `
        <div class="room-details">
            <p>🔹 <strong>शहर:</strong> ${p.Nasarapur}</p>;
            <p>🏠 <strong>भाडे:</strong> ${p.}</p>;
            <p>👤 <strong>मालक:</strong> ${p.owner}</p>;
            <p>📞 <strong>फोन:</strong> ${p.phone}</p>;
            <button onclick="callNow('${p.phone}')">📞 Call Now</button>;
            <hr>
        </div>;
    `).join('') : "<p>⚠ अपार्टमेंट सापडले नाही!</p>";
}

function callNow(phoneNumber) {
    let phoneLink = `tel:${phoneNumber}`;
    window.location = phoneLink;
    alert(`Calling ${phoneNumber}...`); 
    // This will open the dialer with the number
    // Note: Actual call will not be made unless the user confirms


    // You can also use window.open(phoneLink) if you want to open the dialer in a new tab
    // But this is not recommended as it may be blocked by browsers
    // window.open(phoneLink);
    // alert(`Calling ${phoneNumber}...`);
    // This will open the dialer with the number
    // Note: Actual call will not be made unless the user confirms
    // You can also use window.open(phoneLink) if you want to open the dialer in a new tab




    function showOwners() {
    let location = document.getElementById("location").value;
    let ownerDetailsDiv = document.getElementById("ownerDetails");

    if (!location) {
        ownerDetailsDiv.innerHTML = "<p>⚠ कृपया शहराचे नाव टाका!</p>";
        ownerDetailsDiv.style.display = "block";
        return;
    }

    // उदाहरण डेटा
    let properties = [
        { city: "Nasarapur", owner: "Shravan", phone: "7823802792" },
        { city: "Pune", owner: "सुरेश", phone: "9876543211" },
        { city: "दिल्ली", owner: "सीमा", phone: "9876543212" }
    ];

    let filteredOwners = properties.filter(p => p.city.toLowerCase().includes(location.toLowerCase()));

    ownerDetailsDiv.innerHTML = filteredOwners.length ? filteredOwners.map(p => `
        <p>🏠 <strong>शहर:</strong> ${p.city}</p>
        <p>👤 <strong>मालक:</strong> ${p.owner}</p>
        <p>📞 <strong>फोन:</strong> ${p.phone}</p>
        <button onclick="callNow('${p.phone}')">📞 Call Now</button>
        <hr>
    `).join('') : "<p>⚠ अपार्टमेंट सापडले नाही!</p>";

    ownerDetailsDiv.style.display = "block";
}

function callNow(phoneNumber) {
    window.location.href = tel:${phoneNumber};
}