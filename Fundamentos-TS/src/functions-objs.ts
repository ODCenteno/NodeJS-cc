(() => {
  const routes: any[] = [];
  const registerData = (data: {
    busNumber: number,
    terminal: string,
    date: Date,  
  }): void => {
    routes.push(data);
    console.table(routes);
  }

  registerData({
    busNumber: 581,
    terminal: "Canaca",
    date: new Date(),
  })
  registerData({
    busNumber: 585,
    terminal: "Cantaro",
    date: new Date()
  })
})()