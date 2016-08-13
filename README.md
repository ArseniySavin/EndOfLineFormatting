# End of line README

It can replace string chars `\r\n` in text on CR or LF symbol.

## Features

Select string and press hot key Alt+N. You saw new transformed string.

Example formatting payload string</br>
before formatting:
```PayLoad
{
  "serviceName": "ValidationService",
  "details": "System.ServiceModel.FaultException`1[System.ServiceModel.ExceptionDetail]: The method or operation is not implemented. (Fault Detail is equal to An ExceptionDetail, likely created by IncludeExceptionDetailInFaults=true, whose value is:\nSystem.NotImplementedException: The method or operation is not implemented.\n   at Utils.Check(List`1 param1) in d:\\TFS\\Builds\\3\\Utils\\Manager.cs:line 34\r\n   at Agent.Execute(Document doc, List`1 sections) in d:\\TFS\\Builds\\3\\Bis\\Prod Bis.Services Build Manual\\src\\Services\\src\\Agent\\CheckTransfer.cs:line 106\r\n   at Agent.Combiner.Execute(Document doc) in d:\\TFS\\Builds\\3\\Bis\\Prod Bis.Services Build Manual\\src\\Services\\src\\Agent\\Combiner.cs:line 36\r\n   at SyncInvokeExecute(Object , Object[] , Object[] )\r\n   at System.ServiceModel.Dispatcher.SyncMethodInvoker.Inv...)."
}
```
after formatting:
```PayLoad
{
  "serviceName": "ValidationService",
  "details": "System.ServiceModel.FaultException`1[System.ServiceModel.ExceptionDetail]: The method or operation is not implemented. (Fault Detail is equal to An ExceptionDetail, likely created by IncludeExceptionDetailInFaults=true, whose value is:
System.NotImplementedException: The method or operation is not implemented.
   at Utils.Check(List`1 param1) in d:\\TFS\\Builds\\3\\Utils\\Manager.cs:line 34
   at Agent.Execute(Document doc, List`1 sections) in d:\\TFS\\Builds\\3\\Bis\\Prod Bis.Services Build Manual\\src\\Services\\src\\Agent\\CheckTransfer.cs:line 106
   at Agent.Combiner.Execute(Document doc) in d:\\TFS\\Builds\\3\\Bis\\Prod Bis.Services Build Manual\\src\\Services\\src\\Agent\\Combiner.cs:line 36
   at SyncInvokeExecute(Object , Object[] , Object[] )
   at System.ServiceModel.Dispatcher.SyncMethodInvoker.Inv...)."
}
```

## Extension Settings

If you want use your special format for replace.</br>
Add this configuration:
```JSON
EndOfLineFormatting": {
    "regexpPattern" : "\\\\r\\\\n",
    "replaceChar" : "\n"
    }
```
Set your regular expression format for replace.

## Issues

[EndOfLineFormatting issues](https://github.com/ArseniySavin/EndOfLineFormatting/issues)
