$(function(){
    console.log("DOM is ready, javascript loading!")
    $('nav').hide().delay(500).show('slow')
    $('#hide').click(function(){
        $('img').hide()
    })

    $('#show').click(function(){
        $('img').show()
    })

    $('img').mouseenter(function(){
        console.log("Mouse has Entered")
        $(this).fadeTo('slow', .75)
    }).mouseleave(function(){
        console.log("Mouse has Left")
        $(this).fadeTo('fast', 1)
    })

})