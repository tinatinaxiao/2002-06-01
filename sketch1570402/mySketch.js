var inputElement,sliderElement,btnElement,colorPicker
var randomValue=0

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	inputElement =createInput("410730252TINA🦊🦔🦝")//產生一個文字輸入方塊
	inputElement.position(50,10)//決定文字方塊放置的位置
	sliderElement= createSlider(10,150,20,0.01)//最小值，最大值，預設值，間距
	sliderElement.position(250,10)//決定滑竿位置
	btnElement =createButton("MOVE")
	btnElement.position(450,10)
	btnElement.mousePressed(goCrazy)
	colorPicker = createColorPicker('skyblue');//括號內的值，為預設值
	colorPicker.position(550,10)
}

function goCrazy(){
	 if(randomValue>0){
	 randomValue=0//靜止不動
 }
	else
	{
		randomValue=10//抖動的距離為+-10
	}
}

function draw() {
	background(0)
	var txts = inputElement.value();
	var textHeight=sliderElement.value()
	textSize(sliderElement.value())
	var textLength=textWidth(txts)+100
	for(var y=0;y<height;y=y+textHeight+20){
	push()
				if(int(y/(textHeight+20))%2==0){
					fill(colorPicker.value())//偶數行充滿顏色
					translate(-50,0)//使得偶數行的X軸移動50
				}
				else{
					fill(255)
				}
		for(var x=0;x<width;x=x+textLength)
	{
		text(txts,x+random(-randomValue,randomValue),y+random(-randomValue,randomValue)) //顯示文字在座標上
	
		}
		pop()
	}
}