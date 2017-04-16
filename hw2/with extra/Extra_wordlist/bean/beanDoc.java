Package java.CatalogBean

Class CatalogBean

java.lang.Object
org.apache.hadoop.chukwa.rest.bean.CatalogBean

public class CatalogBean
extends Object
All Implemented Interfaces:
com.ibm.commerce.base.objects.ECEntityConstants, com.ibm.websphere.ejbcontainer.DisableFlushBeforeFind, java.io.Serializable, javax.ejb.EnterpriseBean, javax.ejb.EntityBean

ClientTraceBean
Class ClientTraceBean

java.lang.Object
org.apache.hadoop.chukwa.rest.bean.ClientTraceBean

public class ClientTraceBean
extends Object
ColumnBean
public class ColumnBean
extends MarlinBean
The ColumnBean supports encapsulating all of the rendering and formatting information for a TableBean column into a single node. The ColumnBean should only be used as the indexed child, i.e. data column stamp, of a TableBean.

The ColumnBean is useful if clients wish to encapsulate all the information describing a column into a single entity, rather than spreading it out across the indexed child (column stamp), header stamp, header format, header data, and column format objects set globally on the table. The ColumnBean will not render anything itself; however, its own indexed children will be stamped down each cell of that table column

The ColumnBean also allows you to set its own columnFormat, column header format, column header data, and column header stamp. If specified, these will override the values for formats and stamps attributed to the TableBean itself. If they are not specified, the TableBean's own formats and stamps will be used, as before.

You can use ColumnBeans for any, all, or none of the columns in the TableBean. You can also set the rendered flag on a ColumnBean to hide it from view for a given render.

ReturnCodeBean
Class ReturnCodeBean

java.lang.Object
org.apache.hadoop.chukwa.rest.bean.ReturnCodeBean

public class ReturnCodeBean
extends Object
Field Summary

