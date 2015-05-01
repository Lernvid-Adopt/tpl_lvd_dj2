window.addEvent('domready', function() {

	$('styleswitcher').setStyle('height','auto');
	var mySlide = new Fx.Slide('styleswitcher').hide();  //starts the panel in closed state  

    $('toggle_ss').addEvent('click', function(e){
		e = new Event(e);
		mySlide.toggle();
		e.stop();
	});

		var Tips0 = new Tips($$('#togglelink'), {
			initialize:function(){
				this.fx = new Fx.Style(this.toolTip, 'opacity', {duration: 500, wait: false}).set(0);
			},
			onShow: function(toolTip) {
				this.fx.start(1);
			},
			onHide: function(toolTip) {
				this.fx.start(0);
			}
		});





});


