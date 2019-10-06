$(document).ready(function(){
    // $(".btn").click(function(){
    //     $(this).hide();
    // });
    $(".people").on("click",".person-name",function(){
        $(this).siblings(".person-details").toggleClass("d-none");
    });
    $(".save").click(function(){
        let userName=$(".new-name").val();
        let userDetails=$(".info").val();
        let personHtml=`<div>
                            <div class="col-2 person-name">
                                <button class="btn btn-primary">${userName}</button>
                            </div>
                            <div class="col-8 d-none person-details">
                                <p>${userDetails}</p>
                            </div>
                        </div>`;
        $(".people").append(personHtml);
    });
});