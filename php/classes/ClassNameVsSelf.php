<?php

/*
link:
https://stackoverflow.com/questions/3481085/self-vs-classname-inside-static-classname-methods-in-php

Artefacto:
There is indeed a small diference.
self:: forwards static calls, while className:: doesn't.
This only matters for late static bindings in PHP 5.3+.

In static calls, PHP 5.3+ remembers the initially called class.
Using className:: makes PHP "forget" this value (i.e., resets it to className),
while self:: preserves it.

ToolmakerSteve:
The following is wrong:
"self:: forwards static calls". NO, the linked document shows that self:: does
not forward static calls.
If you want forwarding (Late Static Binding), use static::. This would be seen
if C also defined static function foo() { echo "Truth"; }. If LSB occurred,
C::bar would echo "Truth". But it won't. (Tested) So how does C::bar echo "C"?
When C::bar is about to execute, C is stored in some internal php location:
"late static bindings work by storing the class named in the last
"non-forwarding call"."
*/

abstract class AbstractClass
{
    static function getClassName(): string
    {
        return get_called_class();
    }
}

class ParentClass extends AbstractClass
{
    static function useSelf(): string
    {
        return self::getClassName();
    }

    static function useClassName(): string
    {
        return ParentClass::getClassName();
    }
}

class ChildClass extends ParentClass {}


// code
echo ParentClass::useSelf() . "\n";      // ParentClass
echo ParentClass::useClassName() . "\n"; // ParentClass
echo ChildClass::useSelf() . "\n";       // ChildClass
echo ChildClass::useClassName() . "\n";  // ParentClass <- not the correct classname
