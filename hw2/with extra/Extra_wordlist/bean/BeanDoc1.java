CatalogBean

Constructor and Description
CatalogBean() 
Method Summary

Methods 
Modifier and Type	Method and Description
void	addCatalog(WidgetBean widget) 
List<CatalogBean>	addCategory(List<CatalogBean> tracker, String id, String label) 
List<CatalogBean>	getChildren() 
String	getId() 
String	getLabel() 
String	getType() 
void	setChildren(List<CatalogBean> children) 
void	setId(String id) 
void	setLabel(String label) 
void	setType(String type) 
Methods inherited from class java.lang.Object
clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait
Constructor Detail

CatalogBean
public CatalogBean()
Method Detail

getType
public String getType()
getId
public String getId()
getLabel
public String getLabel()
getChildren
public List<CatalogBean> getChildren()
setType
public void setType(String type)
setId
public void setId(String id)
setLabel
public void setLabel(String label)
setChildren
public void setChildren(List<CatalogBean> children)
addCatalog
public void addCatalog(WidgetBean widget)
addCategory
public List<CatalogBean> addCategory(List<CatalogBean> tracker,
                            String id,
                            String label)

public class CatalogBean
extends com.ibm.commerce.catalog.objimpl.CatalogBeanBase
implements javax.ejb.EntityBean
This is an Entity Bean class with CMP fields
Fields inherited from class com.ibm.commerce.catalog.objimpl.CatalogBeanBase
catalogReferenceNumber, COPYRIGHT, description, identifier, memberId, TPCLevel
Fields inherited from class com.ibm.commerce.base.objects.ECEntityBean
cache, entityContext, genericHelper, optCounter, undefinedbean
Fields inherited from interface com.ibm.commerce.base.objects.ECEntityConstants
ACCESSORY, BUNDLE, CONTRACT_INACTIVE, CONTRACT_ONHOLD, CONTRACT_PUBLISHED, COUNTRYABBR_MAX_LENGTH, Default_Null_Id, Default_Null_Id_String, DISPLAYTAX, NOTDISPLAYTAX, PACKAGE, STATEPROVABBR_MAX_LENGTH, UPSELL, USAGE_DISCOUNT, USAGE_SALESTAX, USAGE_SHIPPING, USAGE_SHIPPINGTAX, XSELL
java.util.Hashtable	_copyFromEJB()
_copyFromEJB
void	_copyToEJB(java.util.Hashtable h)
_copyToEJB
protected java.util.Vector	_getLinks()
This method was generated for supporting the associations.
protected void	_initLinks()
This method was generated for supporting the associations.
protected void	_removeLinks()
This method was generated for supporting the associations.
void	ejbActivate()
ejbActivate method comment
com.ibm.commerce.catalog.objects.CatalogKey	ejbCreate()
ejbCreate method for a CMP entity bean
com.ibm.commerce.catalog.objects.CatalogKey	ejbCreate(com.ibm.commerce.context.content.objects.EntityCreationData entityCreationData)
ejbCreate method for a CMP entity bean
com.ibm.commerce.catalog.objects.CatalogKey	ejbCreate(java.lang.Long argCatalogReferenceNumber)
ejbCreate method for a CMP entity bean
com.ibm.commerce.catalog.objects.CatalogKey	ejbCreate(java.lang.Long aMember_id, java.lang.String aIdentifier)
void	ejbLoad()
ejbLoad method comment
void	ejbPassivate()
ejbPassivate method comment
void	ejbPostCreate()
ejbPostCreate method for a CMP entity bean
void	ejbPostCreate(com.ibm.commerce.context.content.objects.EntityCreationData entityCreationData)
ejbPostCreate method for a CMP entity bean
void	ejbPostCreate(java.lang.Long argCatalogReferenceNumber)
ejbPostCreate method for a CMP entity bean
void	ejbPostCreate(java.lang.Long aMember_id, java.lang.String aIdentifier)
void	ejbRemove()
ejbRemove method comment
void	ejbStore()
ejbStore method comment



