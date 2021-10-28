import _ from 'lodash';
  export default {
    data () {
      return {
        vehicleType: 'motor',
        selectedIndex: 0,
        inputKilometer: 1,
        total: 110,
        vehicles: [{
          baseFare: 100,
          perKilometer: 10,
          name: 'motor',
          label: 'Motorcycle',
          min: 1,
          max: 100,
          description: 'Honda Click 125, NMax, Aerox, Honda Beat, Suzuki Raider R150. Tricycle (w/ sidecar)'
        },
        {
          baseFare: 200,
          perKilometer: 13,
          name: 'sedan',
          label: 'Sedan Car',
          min: 1,
          max: 150,
          description: 'Toyota Innova, Ford Raptor, Hyundai Starex, Toyota Vios, Honda City, Hyundai Accent'
        },
        {
          baseFare: 250,
          perKilometer: 15,
          name: 'long-distance',
          label: 'Long Distance',
          min: 151,
          max: 300,
          description: 'Trucks, Toyota Innova, Ford Raptor, Hyundai Starex, Toyota Vios, Honda City, Hyundai Accent'
        }
        ]
      }
    },
    methods: {
      finishLock(data) {
        console.log(data)
      },
      changeVehicle () {
        this.selectedIndex = _.findIndex(this.vehicles, x => x.name === this.vehicleType);
        this.inputKilometer = this.vehicles[this.selectedIndex].min;
        this.calculate();
      },
      calculate () {
        const vehicle = this.vehicles[this.selectedIndex];
        const totalPerKm = vehicle.perKilometer * this.inputKilometer;
        this.total = totalPerKm + vehicle.baseFare;
      }
    },
    computed: {
      getTotal () {
        return this.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  }