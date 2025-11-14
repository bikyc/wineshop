// src/components/AddNewBrand.jsx
import { useState, useEffect } from 'react';
import { X, Plus, Trash2, ChevronLeft } from 'lucide-react';
import { toast } from 'react-hot-toast'; 
/**
 * Add/Edit Brand Drawer
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {() => void} props.onClose
 * @param {number} [props.brandId] - For edit mode
 * @param {() => void} [props.onSuccess] - Optional callback
 */
export default function AddNewBrand({ isOpen, onClose, brandId, onSuccess }) {
  const [formData, setFormData] = useState({
    brandType: 'Alcoholic',
    brandName: '',
    parentCompany: '',
    categories: '',
    suppliers: '',
    address: '',
    regdOffice: '',
    countryOfOrigin: '',
    enabled: true,
    notes: '',
    contacts: [{ name: '', role: '', phone: '', email: '' }],
    bankDetails: [{ accountHolder: '', bankName: '', accountNumber: '', ifsc: '', branch: '' }],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        brandType: 'Alcoholic',
        brandName: '',
        parentCompany: '',
        categories: '',
        suppliers: '',
        address: '',
        regdOffice: '',
        countryOfOrigin: '',
        enabled: true,
        notes: '',
        contacts: [{ name: '', role: '', phone: '', email: '' }],
        bankDetails: [{ accountHolder: '', bankName: '', accountNumber: '', ifsc: '', branch: '' }],
      });
      return;
    }
    if (brandId) {
      setLoading(true);
      api.getBrand(brandId)
        .then(data => {
          setFormData({
            brandType: data.type || 'Alcoholic',
            brandName: data.name || '',
            parentCompany: data.parentCompany || '',
            categories: data.categories || '',
            suppliers: data.suppliers || '',
            address: data.address || '',
            regdOffice: data.regdOffice || '',
            countryOfOrigin: data.countryOfOrigin || '',
            enabled: data.isEnabled ?? true,
            notes: data.notes || '',
            contacts: data.contacts?.length ? data.contacts : [{ name: '', role: '', phone: '', email: '' }],
            bankDetails: data.bankDetails?.length ? data.bankDetails : [{ accountHolder: '', bankName: '', accountNumber: '', ifsc: '', branch: '' }],
          });
        })
        .catch(() => {
          toast.error('Failed to load brand');
          onClose();
        })
        .finally(() => setLoading(false));
    }
  }, [isOpen, brandId, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.brandName.trim()) {
      toast.error("Brand name is required");
      return;
    }

    setLoading(true);
    const toastId = toast.loading(brandId ? "Updating..." : "Adding...");

    try {
      const payload = {
        name: formData.brandName,
        type: formData.brandType,
        parentCompany: formData.parentCompany || null,
        categories: formData.categories || null,
        suppliers: formData.suppliers || null,
        address: formData.address || null,
        regdOffice: formData.regdOffice || null,
        countryOfOrigin: formData.countryOfOrigin || null,
        isEnabled: formData.enabled,
        notes: formData.notes || null,
        contacts: formData.contacts.filter(c => c.name || c.phone || c.email),
        bankDetails: formData.bankDetails.filter(b => b.accountHolder || b.accountNumber),
      };

      if (brandId) {
        await api.updateBrand(brandId, payload);
        toast.success("Brand updated!");
      } else {
        await api.addBrand(payload);
        toast.success("Brand added!");
      }

      onSuccess?.();
      onClose();
    } catch (err) {
      toast.error("Operation failed");
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const addContact = () => {
    setFormData(prev => ({
      ...prev,
      contacts: [...prev.contacts, { name: '', role: '', phone: '', email: '' }]
    }));
  };

  const removeContact = (index) => {
    setFormData(prev => ({
      ...prev,
      contacts: prev.contacts.filter((_, i) => i !== index)
    }));
  };

  const updateContact = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      contacts: prev.contacts.map((c, i) => i === index ? { ...c, [field]: value } : c)
    }));
  };

  const addBank = () => {
    setFormData(prev => ({
      ...prev,
      bankDetails: [...prev.bankDetails, { accountHolder: '', bankName: '', accountNumber: '', ifsc: '', branch: '' }]
    }));
  };

  const removeBank = (index) => {
    setFormData(prev => ({
      ...prev,
      bankDetails: prev.bankDetails.filter((_, i) => i !== index)
    }));
  };

  const updateBank = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      bankDetails: prev.bankDetails.map((b, i) => i === index ? { ...b, [field]: value } : b)
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Slide-in Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            disabled={loading}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">{brandId ? 'Edit Brand' : 'Add Brand'}</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            disabled={loading}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Loading State */}
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10">
              <div className="text-purple-600">Loading...</div>
            </div>
          )}

          {/* Basic Details */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="brandType"
                  value={formData.brandType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                  disabled={loading}
                >
                  <option value="Alcoholic">Alcoholic</option>
                  <option value="Non-Alcoholic">Non-Alcoholic</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent Company</label>
                <input
                  type="text"
                  name="parentCompany"
                  value={formData.parentCompany}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
                <input
                  type="text"
                  name="categories"
                  value={formData.categories}
                  onChange={handleInputChange}
                  placeholder="e.g. IMFL, Beer, Wine"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Suppliers</label>
                <input
                  type="text"
                  name="suppliers"
                  value={formData.suppliers}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Regd. Office</label>
                <input
                  type="text"
                  name="regdOffice"
                  value={formData.regdOffice}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country of Origin</label>
                <input
                  type="text"
                  name="countryOfOrigin"
                  value={formData.countryOfOrigin}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  disabled={loading}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="enabled"
                  checked={formData.enabled}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                  disabled={loading}
                />
                <label className="text-sm font-medium text-gray-700">Enabled</label>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Enter notes"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  disabled={loading}
                />
              </div>
            </div>
          </section>

          {/* Contact Details */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Contact Details</h2>
              <button
                type="button"
                onClick={addContact}
                className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium"
                disabled={loading}
              >
                <Plus className="w-4 h-4" /> Add Contact
              </button>
            </div>
            {formData.contacts.map((contact, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3 p-4 bg-gray-50 rounded-lg relative">
                {formData.contacts.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeContact(index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    disabled={loading}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <input
                  type="text"
                  placeholder="Contact Name"
                  value={contact.name}
                  onChange={(e) => updateContact(index, 'name', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={contact.role}
                  onChange={(e) => updateContact(index, 'role', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
                <input
                  type="tel"
                  placeholder="Contact Phone"
                  value={contact.phone}
                  onChange={(e) => updateContact(index, 'phone', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={contact.email}
                  onChange={(e) => updateContact(index, 'email', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
              </div>
            ))}
          </section>

          {/* Bank Details */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Bank Details</h2>
              <button
                type="button"
                onClick={addBank}
                className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium"
                disabled={loading}
              >
                <Plus className="w-4 h-4" /> Add Bank
              </button>
            </div>
            {formData.bankDetails.map((bank, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-3 p-4 bg-gray-50 rounded-lg relative">
                {formData.bankDetails.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeBank(index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    disabled={loading}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <input
                  type="text"
                  placeholder="Account Holder"
                  value={bank.accountHolder}
                  onChange={(e) => updateBank(index, 'accountHolder', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
                <input
                  type="text"
                  placeholder="Bank Name"
                  value={bank.bankName}
                  onChange={(e) => updateBank(index, 'bankName', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
                <input
                  type="text"
                  placeholder="Account Number"
                  value={bank.accountNumber}
                  onChange={(e) => updateBank(index, 'accountNumber', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
                <input
                  type="text"
                  placeholder="IFSC"
                  value={bank.ifsc}
                  onChange={(e) => updateBank(index, 'ifsc', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
                <input
                  type="text"
                  placeholder="Branch"
                  value={bank.branch}
                  onChange={(e) => updateBank(index, 'branch', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
              </div>
            ))}
          </section>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              disabled={loading}
            >
              Close
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50"
            >
              {loading ? 'Saving...' : (brandId ? 'Update Brand' : 'Add Brand')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}