import { useState, useEffect } from "react";
import { useAdmin, HomeContent } from "@/context/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const HomeEditor = () => {
    const { homeContent, updateHomeContent } = useAdmin();
    const [formData, setFormData] = useState<HomeContent>(homeContent);
    const { toast } = useToast();

    useEffect(() => {
        setFormData(homeContent);
    }, [homeContent]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateHomeContent(formData);
        toast({
            title: "Home Page Updated",
            description: "Changes have been saved successfully.",
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit Home Page Content</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Hero Section</h3>
                        <div className="space-y-2">
                            <Label htmlFor="heroTitle">Hero Title</Label>
                            <Input
                                id="heroTitle"
                                name="heroTitle"
                                value={formData.heroTitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                            <Textarea
                                id="heroSubtitle"
                                name="heroSubtitle"
                                value={formData.heroSubtitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Trending Destinations Section</h3>
                        <div className="space-y-2">
                            <Label htmlFor="destinationsTitle">Section Title</Label>
                            <Input
                                id="destinationsTitle"
                                name="destinationsTitle"
                                value={formData.destinationsTitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="destinationsSubtitle">Section Subtitle</Label>
                            <Textarea
                                id="destinationsSubtitle"
                                name="destinationsSubtitle"
                                value={formData.destinationsSubtitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Community Section</h3>
                        <div className="space-y-2">
                            <Label htmlFor="communityTitle">Community Title</Label>
                            <Input
                                id="communityTitle"
                                name="communityTitle"
                                value={formData.communityTitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="communitySubtitle">Community Subtitle</Label>
                            <Textarea
                                id="communitySubtitle"
                                name="communitySubtitle"
                                value={formData.communitySubtitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <Button type="submit">Save Changes</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default HomeEditor;
