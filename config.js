var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoib3Rpc2t5IiwiYSI6ImNrc2l1NnV5djB2eGcyb21icWxrNW8zcXoifQ.LPG7MaK49RzqeL6xhS4a2A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Mlolongo',
            image: './assets/san-fran.jpeg',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.',
            location: {
                center: [36.94154, -1.39710],
                zoom: 16.82,
                pitch: 58.54,
                bearing: -46.74
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Syokimau - SGR',
            image: './assets/washington-dc.jpg',
            description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [36.90844, -1.36106],
                zoom: 14.18,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'JKIA',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [36.90363, -1.34533],
                zoom: 14.74,
                pitch:68,
                bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Capital Center',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [36.88007, -1.32864],
                zoom: 15.13,
                pitch: 28.5,
                bearing: 16.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
