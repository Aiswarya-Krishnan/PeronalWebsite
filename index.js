
        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbz0NFiIS1V9CjSCvEq_8ykAn6HsYnWtRTqJNRcpPiR1T_I0xw7-km7RvaiASHBqqex4vg/exec"
               ,data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })
  