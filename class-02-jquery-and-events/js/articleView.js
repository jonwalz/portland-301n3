var articleView = {

};

articleView.populateFilters = function(){
    $('article').each(function(){
        if(!$(this).hasClass('template')) {
            var val = $(this).find('address a').text();

            var optionTag = '<option value="' + val + '">' + val + "</option>"; // this is the first dropdown

            $('#author-filter').append(optionTag);

            var val = $(this).attr('data-category'); // this is the second dropdown

            var optionTag = '<option value="' + val + '">' + val + "</option>";
            if($('#category-filter option[value="' + val + '"]').length === 0){
                $('#category-filter').append(optionTag);
            }
        }
    })
}

articleView.handleAuthorFilter = function(){
    //
    $('#author-filter').on('change', function(){
        if($(this).val()) {
            var $selectedAuthor = $('article[data-attribue="' + $(this).val() + '"]');

            $('article').not($selectedAuthor).hide();
        } else {
            $('article').not('.template').show();
        }

        $('#author-filter').val('');
    });
}

articleView.setTeaser = function(){
    $('.article-body *:nth-of-type(n+2)').hide();

    $('section#articles .read-on').on('click', function(e){
        e.preventDefault();

        var readOnLink = $(e.target);

        readOnLink.hide();

        readOnLink.parent().find('p').show();
    });
}

articleView.handleMainNav = function(){

    $('.main-nav .tab').on('click', function(){
        // creating clickable tabs

        var tab_id = $(this).attr('data-content');

        var selectedTab = $('#' + tab_id);

        $('section.tab-content').hide();

        selectedTab.show();

    });

    $('.main-nav tab:first').click();

}


$(document).ready(function(){
    articleView.populateFilters();
    articleView.handeAuthorFilter();
    articleView.setTeaser();
    articleView.handleMainNav();
})