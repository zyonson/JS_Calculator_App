function update( _v )
    {
        document.querySelector( 'input' ).value = _v;
    }

    function append( _v ) 
    {
        if(document.querySelector( 'input' ).value.slice(0) === '0'
        && document.querySelector( 'input' ).value.slice(1) !== '.')
        {
            document.querySelector( 'input' ).value = _v;
        }else{
        document.querySelector( 'input' ).value += _v;
        }
    }
   
    function operater(_v)
    {
        if(document.querySelector( 'input' ).value.slice(-1) === '%'
        || document.querySelector( 'input' ).value.slice(-1) === '/' 
        || document.querySelector( 'input' ).value.slice(-1) === '*'
        || document.querySelector( 'input' ).value.slice(-1) === '-'
        || document.querySelector( 'input' ).value.slice(-1) === '+'
        || document.querySelector( 'input' ).value.slice(-1) === '.') 
        {
        document.querySelector( 'input' ).value = document.querySelector( 'input' ).value.slice(0,-1) + _v;
            }else{
         document.querySelector( 'input' ).value += _v;
            }
    }

    function calc()
    {
        const v = document.querySelector( 'input' ).value;
        const f = new Function( 'return ' + v );
        update( f().toString() );
    }
    
    function del(_v)
    {
        document.querySelector( 'input' ).value = document.querySelector( 'input' ).value.slice(0,-1);
    }
   