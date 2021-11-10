## Caixa retangular com 

- width e height
- content
- border
- padding
- margin

Cada elemento na página é considerado uma caixa

## box sizing

## block e inline

## display block
ocupa toda a linha, colocando o próximo elemento abaixo desse
div/p/action/todos os headings é um display block

## inline
elemento um ao lado do outro
strong/span/a/em é display inline

é possivel alterar o comportamento com a propriedade display

```css
div {
    display: inline
}


span {
    display: block
}
```
## margin
são os espaços entre os elementos:
- margin-top
- margin-right
- margin-bottom
- margin-left

recebe:
    lenght
    percentage
    auto

ex:

```css
div{
    /*shorthand*/
          /* top right bottom left              */
    margin: 12px 16px 10px    4px;
         /* top right&&left bottom */
    margin: 12px 16px        0;
         /* top&&bottom right&&left  */
    margin: 8px            26px;
        /*   todos os lados  */
    margin: 8px;
}
```
## margin collapsing top se junta ao bottom

## padding

preenchimento interno da caixa, recebe as mesmas propriedades do margin, exceto pelo auto
faz diferença na largura da caixa

```css
div{
    /*shorthand*/
          /* top right bottom left              */
    padding: 12px 16px 10px    4px;
         /* top right&&left bottom */
    padding: 12px 16px        0;
         /* top&&bottom right&&left  */
    padding: 8px            26px;
        /*   todos os lados  */
    padding: 8px;
}
```

## border 

são as bordas da caixa
recebe como valores:
- border-style
- border-width
- border-color

geralmente utilizado o shorthand

border soma com a caixa

## outline

não é parte do box model e por isso não modifica o tamanho da caixa
pode ser =/= retangular
mais usado pelo user agent p/ acessibilidade
não permite ajustes individuais