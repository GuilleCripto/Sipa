import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";


//import { table, Button,Form,FormGroup,Label,Input } from 'reactstrap';
export class FormProduct extends Component {
  render() {
	  
    return (
   
	  <Card profile>
		 <h1 className='font-weight-bold text-center'>Detalle de Productos</h1>	
     <button>hola1</button>
	  </Card>
    
    );
  }
}

export class ListProduct extends Component {
	
 

	
  render() {
let id = -1;
function createData() {

}

	  
	  	const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
  
};
const tabla={
		products:[]
	}
const tableList={
	tabla:[["1", "Empresa1", ],
                ["2", "empresa2"]
				]};
console.log(tableList.tabla);
//const { classes } = styles;
//console.log(classes);
	  const {products}=this.props
	  
	/*  tabla.products=this.props.products.map(task => {
		return JSON.stringify(task)	
		//return JSON.stringify(task)
    })*/

    console.log('Hola es guillermo');
    
    const generateElement = (key,value) => {
      return (value)
         
    }
    function generateData(data) { 
      const newData = Object.keys(data).reduce((result, currentKey) => {
        if (typeof data[currentKey] === 'string' || data[currentKey] instanceof String) {
          const elementToPush = generateElement(currentKey, data[currentKey]);
          result.push(elementToPush);
        } else {
          const nested = generateData(data[currentKey]);
          result.push(...nested);
        }
        return result;
      }, []);
      return newData;
    }

    const arr=[generateData(this.props.products)];
    console.log(arr);
  
  
   
/*
  var arr = [
  [],[],[]
  ];
     /*
var	newTasks1=new Array;
var	newTasks2=new Array;
var	newTasks3=new Array(2);
for (var [key, value] of Object.entries(this.props.products)) {
    newTasks1[key]=(value); // "a 5", "b 7", "c 9"
}

/*
var valor1='';
	for (var [key, value] of Object.entries(newTasks1)) {
	valor1='';
	console.log('for******')
	var i=0;
	var y=0;
	for (var [key1, value1] of Object.entries(value)) {
		console.log('		tabla******')
		arr[key].push(value1)

	}
} 
console.log('tabla');
console.log(arr);
/*	var objMap = new Map(Object.entries(newTasks));
	console.log('guilleInicio');
	
	console.log(objMap)

for (var [key, value] of Object.entries(this.props.products)) {
	console.log('guille');
    console.log(value); // "a 5", "b 7", "c 9"
}
//const obj = JSON.stringify(products);
//var obj = {a: 5, b: 7, c: 9};
var obj = {id:"2",nombre:"corporación de telefono de Venezuela "};

	
	for (var key in this.props.products) {
 
}
var tipo = Object.keys((this.props.products))[0];

 console.log('Guillermo1')
  console.log(tipo);
/*if (typeof Object.keys !== "function") {
    (function() {
        var hasOwn = Object.prototype.hasOwnProperty;
        Object.keys = Object_keys;
        function Object_keys(obj) {
            var keys = [], name;
            for (name in obj) {
                if (hasOwn.call(obj, name)) {
                    keys.push(name);
                }
            }
            return keys;
        }
    })();
}*/

//console.log(newTasks1);
/*newTasks1={"id":"2","nombre":"corporación de telefono de Venezuela "};
var i=0;
for (var [key, value] of Object.entries(newTasks1)) {
	var y=0;
	for (var [key1, value1] of Object.entries(value)) {
    newTasks2[i]=(value1)
 
}
i++	
}*/

//newTasks2=newTasks2.replace('c','j'));


	/*const newTasks = Object.keys(products).map(function(_) { return products[_]; })*/
	//tableList.tabla={products};
	//console.log('Antes');
	//console.log(products);
	
	/*const newTasks = this.props.products.map(task => {
	return "["{task.name}"]";
	  //return task
    });
	var j = {"1": "Empresa", "2": "OtraEmpresa"};
	const newTasks = Object.keys(j).map(function(_) { return j[_]; })
	var j = this.props.products
	const newTasks = Object.keys(j).map((key) => [key, j[key]]);
	alert(newTasks);*/
	/*const newTasks=Object.keys(this.props.products).map((key,row)=>
  [this.props.products[key]])*/
  //const	j= {"1": "Empresa", "2": "OtraEmpresa"};
  /*const	j= this.props.products.map(task => {
      return task
	  //return task
    });
	console.log('jjjjjjjjjjjjjjj')
	console.log(j)
	console.log(tableList)
  const newTasks = Object.keys(j).map(function(_) { return j[_]; })*/
	
	/*console.log('newTasks')
	console.log(newTasks)*/
	
	  //return task
  
	/*const newTasks=  this.props.products.map((key, index)=>{
		return {key[index]}
	}
	)*/
	/*console.log('despues');
	console.log(newTasks);*/

	  //const { classes } = props;
    return (
        <Card>
          <CardHeader color="primary">
            <h4 className={styles.cardTitleWhite}>Listados</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["id", "Nombre"]}
              tableData={arr}
            />
          </CardBody>
        </Card>
      
   
    );
  }
}

export default class ProductBox extends Component {
	url='http://localhost/produ3/web/app_dev.php/listadoJson/empresa';
	state={
		products:[],
		rows:[]
	}
  componentDidMount() {
	  fetch(this.url)
			.then(response => response.json())
			/*.then(products => console.log(products))*/
			.then(products => this.setState({products}))
			.catch(e => console.log(e));
  }
  render() {
    return (
	 <GridContainer>
		<GridItem xs={6} >
			<ListProduct products = {this.state.products}/>
		</GridItem>
		<GridItem xs={6} >	
			<FormProduct/>
		</GridItem>
	  </GridContainer>
    );
  }
}


