export function build(x){
    let i = 1
    let block = ''
    let counterFoundation = 2
    let interval = setInterval(function(){
        block = document.createElement('div')
        document.body.append(block)
        block.innerHTML = i
        block.id = 'brick-'+i
        ++i
        if(counterFoundation === 3){
            block.dataset.foundation = true
            counterFoundation = 0
        }
        ++counterFoundation
        console.log(block)
        if(i===x+1){
            clearInterval(interval)
        }
    },100,i)
    return block
}