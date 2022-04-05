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

export function repair(...repair){
    let i = 0
    let interval = setInterval(function(){
        if(repair[i].dataset.foundation === 'true'){
            repair[i].style.backgroundColor = 'red'
        }
        ++i
        if(i===repair.length){
            clearInterval(interval)
        }
    },100,i)
}

export function destroy(){
    let elements = document.querySelectorAll('div[id^="brick"]')
    elements[elements.length-1].remove()
    }