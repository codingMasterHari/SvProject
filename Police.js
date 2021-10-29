class Police {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    //   this.rank = null;
    }
  
    getCount(){
      var policeCountRef = database.ref('policeCount');
      policeCountRef.on("value",(data)=>{
        policeCount = data.val();
      })
    }
  
    updateCount(count) {
      database.ref('/').update({
        policeCount: count
      });
    }
  
    update() {
      var policeIndex = "police" + this.index;
      database.ref(policeIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPoliceInfo(){
      var policeInfoRef = database.ref('police');
      policeInfoRef.on("value",(data)=>{
        // allPlayers = data.val();
      })
    }
  
    // getCarsAtEnd() {
    //   database.ref('CarsAtEnd').on("value", (data) => {
    //     this.rank=data.val();
    //   })
    // }
    
    // static updateCarsAtEnd(rank) {
    //   database.ref('/').update ({
    //     CarsAtEnd:rank
    //   })
    // }
}