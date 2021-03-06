<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script>
    //태그이름, 속성객체, 자식노드를 포함하는 노드만들어 반환하는 함수
    function makeEle(node,attributes,...subNodes){
      //1) element생성
      let eleNode = document.createElement(node);
      //2) attributes생성
      if(attributes){
        for(let attr in attributes){
          if(attributes.hasOwnProperty(attr)){
            let attrNode = document.createAttribute(attr);
            attrNode.value = attributes[attr];
            eleNode.setAttributeNode(attrNode);
          }
        }
      }
      //3) textNode생성
      for(let i=0; i<subNodes.length; i++){
        let child = subNodes[i];
        if(typeof child == 'string'){
          child = document.createTextNode(child);
        }
        eleNode.appendChild(child);
      }
      return eleNode;
    }
  </script>
</head>
<body>
  <div id='contents'></div>
  <script>
    const $tag1 = makeEle("ul",{id:"item",class:"grp1"},"첫출",
                    makeEle("li",null,"라인"));
    console.log($tag1);
    document.getElementById('contents').appendChild($tag1);
  </script>
</body>
</html> 