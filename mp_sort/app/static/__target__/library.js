'use strict';var random={};import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,__imul__,__in__,__init__,__ior__,
__ipow__,__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,dict,dir,divmod,enumerate,
filter,float,getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";import*as __module_random__ from"./random.js";__nest__(random,"",__module_random__);var __name__="__main__";export var array=[];export var gen_random_int=function(number,seed){var result=list(range(number));random.shuffle(result,random.seed(seed));
return result};export var generate=function(){var number=10;var seed=200;array=gen_random_int(number,seed);var array_str=",".join(array)+".";document.getElementById("generate").innerHTML=array_str};export var sortnumber1=function(){if(random.random()<.5){print("Insertion Sorting...");sort_arr(array)}else{print("Bubble Sorting...");sort_arr(array)}var array_str=", ".join(array);document.getElementById("sorted").innerHTML=array_str};export var sortnumber2=function(){var value=document.getElementsByName("numbers")[0].value;
if(value==""){window.alert("Your textbox is empty");return}var num_str_arr=value.py_split(",");var numbers=list(map(str_to_num,num_str_arr));if(random.random()<.5){print("Insertion Sorting...");sort_arr(numbers)}else{print("Bubble Sorting...");sort_arr(numbers)}var array_str=", ".join(function(){var __accu0__=[];for(var num of numbers)__accu0__.append(str(num));return py_iter(__accu0__)}());document.getElementById("sorted").innerHTML=array_str};export var str_to_num=function(string){if(int(string)==
float(string))return int(string);else if(float(string))return float(string);else{window.alert("Non number provided");return}};export var sort_arr=function(arr){var n=len(arr);for(var outer_index=1;outer_index<n;outer_index++){var inner_index=outer_index;var temp=arr[inner_index];while(inner_index>0&&temp<arr[inner_index-1]){arr[inner_index]=arr[inner_index-1];inner_index-=1}arr[inner_index]=temp}};export var insertion_sort=function(array){var n=len(array);for(var i=1;i<n;i++){var j=i;while(j>0&&float(array[j])<
float(array[j-1])){var __left0__=tuple([array[j-1],array[j]]);array[j]=__left0__[0];array[j-1]=__left0__[1];j-=1}}};export var bubble_sort=function(array){var n=len(array);var isSwap=true;while(isSwap){var isSwap=false;var lastIndex=0;for(var j=0;j<n-1;j++)if(array[j+1]<array[j]){var __left0__=tuple([array[j],array[j+1]]);array[j+1]=__left0__[0];array[j]=__left0__[1];var isSwap=true;var lastIndex=j+1}var n=lastIndex}};

//# sourceMappingURL=library.map